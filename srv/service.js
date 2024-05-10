const { insert } = require('@sap/cds/libx/_runtime/hana/execute');
const axios = require('axios');
module.exports = async function () {

    let { complains, comment, workitems, workflowhistory, levels, files } = this.entities;

    this.before('CREATE', 'files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/files(${req.data.ID})/content`
    })

    this.before('READ', 'files', req => {
        //check content-type
        console.log('content-type: ', req.headers['content-type'])
    })

    this.on('UPDATE', 'poheader', async req => {
        var comp = req.data.pono;
        console.log("comp", comp);
        var status = req.data.type;
        console.log("status", status);
        if (status == 'Approved') {
            var comm = req.data.pannum;
            console.log("comm", comm);
            var approvedby = req.data.vendor;
            // approvedby = 'mitta.manisha@peolsolutions.com'
            console.log("approvedby", approvedby);
            var lvl = req.data.amount;
            console.log("lvl", lvl)
            const d = new Date();
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            let select_bd = await SELECT(workflowhistory).where({ complainno: comp, level: lvl })
            console.log("select_bd", select_bd);
            let bd = select_bd[0].Begin_DateAND_Time;
            console.log("bd", bd);
            const startDateParts = bd.split("-").map(Number);
            const endDateParts = formattedDate.split("-").map(Number);
            const startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
            const endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);

            // Calculate the difference in milliseconds
            const differenceInMs = endDate - startDate;

            // Convert milliseconds to days
            const daysDiff = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
            var days = daysDiff.toString();
            let update2 = await UPDATE(complains).set({ cstatus: status }).where({ complainno: comp });
            console.log("update2", update2);
            let post = await INSERT.into(comment).entries({ complainno: comp, comments: comm, createdBy: approvedby });
            console.log("post", post);
            let update1 = await UPDATE(workflowhistory).set({ Notification_Status: status, End_DateAND_Time: formattedDate, Approved_by: approvedby, Days_Taken: days }).where({ complainno: comp, level: lvl });
            console.log("update1", update1);
        }
    
        else if (status == 'Reverted') {
            var comm = req.data.pannum;
            console.log("comm", comm);
            var approvedby = req.data.vendor;
            // approvedby = 'mitta.manisha@peolsolutions.com'
            console.log("approvedby", approvedby);
            var lvl = req.data.amount;
            console.log("lvl", lvl)
            const d = new Date();
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            let select_bd = await SELECT(workflowhistory).where({ complainno: comp, level: lvl })
            console.log("select_bd", select_bd);
            let bd = select_bd[0].Begin_DateAND_Time;
            console.log("bd", bd);
            const startDateParts = bd.split("-").map(Number);
            const endDateParts = formattedDate.split("-").map(Number);
            const startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
            const endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);

            // Calculate the difference in milliseconds
            const differenceInMs = endDate - startDate;

            // Convert milliseconds to days
            const daysDiff = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
            var days = daysDiff.toString();
            let update2 = await UPDATE(complains).set({ cstatus: status }).where({ complainno: comp });
            console.log("update2", update2);
            let post = await INSERT.into(comment).entries({ complainno: comp, comments: comm, createdBy: approvedby });
            console.log("post", post);
            let update1 = await UPDATE(workflowhistory).set({ Notification_Status: status, End_DateAND_Time: formattedDate, Approved_by: approvedby, Days_Taken: days }).where({ complainno: comp, level: lvl });
            console.log("update1", update1);
        }

    })

    this.on('UPDATE', 'complains', async req => {
        console.log("req", req)
        var status = req.data.wid;
        console.log("status", status);
        var comp = req.data.complainno;
        console.log("comp", comp);
        if (status == 'Approved') {
            let select_wid = await SELECT(complains).where({ complainno: comp })
            console.log("select_wid", select_wid);
            let wid = select_wid[0].wid;
            console.log("wid", wid);
            var client = 'sb-60da8103-a679-4130-9d5a-391c2c74976d!b248944|xsuaa!b49390';
            var secret = 'cdbf545c-34be-419c-9510-0aa752ef51e9$pRpTrBw7nLUtVNga7e3CNtAWfZZVarrTccCpulSFJ8o=';
            var auth1 = Buffer.from(client + ':' + secret, 'utf-8').toString('base64');
            var response1 = await axios.request('https://10134ddctrial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + auth1
                    }
                });

            var subp = await axios.request(`https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances?parentInstanceId=${wid} & status=RUNNING`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + response1.data.access_token,
                    }
                });
            console.log("subp", subp)
            var subid = subp.data[0].id;
            console.log("subid", subid);



        }
        var bodyy = {
            "status": "CANCELED",
            "cascade": true
        };
        console.log("bodyy", bodyy);
        var cancelsubp = await axios.request(`https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances/${subid}`,
            {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + response1.data.access_token,
                },
                data: bodyy
            });
        console.log("cancelsubp", cancelsubp)

    });

    this.on('triggerProcess', async (req) => {
        debugger
        let result = req.data.data;
        result = JSON.parse(result);
        var comp = result.complainno;
        var compType = result.ccomplain_about
        try {
            console.log("process trigger");
            var workitemId;
            var client = 'sb-60da8103-a679-4130-9d5a-391c2c74976d!b248944|xsuaa!b49390';
            var secret = 'cdbf545c-34be-419c-9510-0aa752ef51e9$pRpTrBw7nLUtVNga7e3CNtAWfZZVarrTccCpulSFJ8o=';
            var auth1 = Buffer.from(client + ':' + secret, 'utf-8').toString('base64');
            // var authString = client + ':' + secret;
            // var auth1 = window.btoa(authString);
            // let app = await SELECT.from(workflowhistory);
            // var approvers1 = await SELECT.from(workflowhistory).where`complainttype = ${compType} and level = '1.0'`
            // var approvers1 = await SELECT.from(workflowhistory).where({ complainttype: compType, level: '1.0' });
            var response1 = await axios.request('https://10134ddctrial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + auth1
                    }
                });
            console.log(response1);
            var bodyy = JSON.parse(JSON.stringify({
                "definitionId": "us10.10134ddctrial.vendorprocess.vendor",
                "context": {

                    "filter": `complainttype eq '${compType}'`,
                    "complainno": comp

                }
            }));
            console.log(bodyy);
            var response11 = await axios.post(`https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances`, bodyy,
                {
                    headers: {
                        'Authorization': 'Bearer ' + response1.data.access_token,
                    }
                });
            workitemId = response11.data.rootInstanceId;

            await UPDATE(complains).set({ wid: workitemId }).where({ complainno: comp });
            debugger
            // await new Promise((resolve, reject) => {
            //     setTimeout(resolve, 2000)
            // })
            // var subp = await axios.request(`https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances?parentInstanceId=${workitemId} & status=RUNNING`,
            //     {
            //         method: 'GET',
            //         headers: {
            //             'Authorization': 'Bearer ' + response1.data.access_token,
            //         }
            //     });
            // var approvers = await SELECT.from(levels).where`complainttype = ${compType} and level = '1.0'`
            // // approvers.forEach(async approver => {
            // //     var wor = await INSERT.into(workitems).entries({ wid: subp.data[0].rootInstanceId, name: approver.Employee_ID });
            // // });
            // for (const approver of approvers) {
            //      await INSERT.into(workitems).entries({ wid: subp.data[0].rootInstanceId, name: approver.employeid });
            // }


        } catch (error) {
            console.log(error)
        }
    });
    this.on('submitcomplaints', async (req) => {
        debugger
        let result = req.data.data;
        result = JSON.parse(result);

        let call = req.data.status;
        call = JSON.parse(call);
        call = call.status;

        if (call == 'postComp') {
            await INSERT.into(complains).entries(result)
            return
        }
        if (call == 'getComp') {
            var comp = result.complainno;
            let content = await SELECT.from(complains).where({ complainno: comp });
            return JSON.stringify(content)

        }
        if (call == 'getComments') {
            var comp = result.complainno;
            let content = await SELECT.from(comment).where({ complainno: comp });
            return JSON.stringify(content)

        }
        if (call == 'getlevel') {
            var type = result.ccomplain_about;
            let content1 = await SELECT.from(levels).where({ complainttype: type });
            return JSON.stringify(content1)
        }
        if (call == 'postWorkflow') {
            await INSERT.into(workflowhistory).entries(result)
            return
        }
        if (call == 'postComment') {
            await INSERT.into(comment).entries(result)
            return
        }
        if (call == 'revsubmitted') {
            debugger
            var comp = result.complainno;
            await UPDATE(complains).set({ cstatus: result.cstatus }).where({ complainno: comp });
            return
        }
        if (call === 'patchattach') {
            try {
                var uid = result.uid;
                console.log("uid",uid);
                var cb = result.createdBy;
                console.log("cb",cb);

                // Assuming 'files' is your database table
                var up1 = await UPDATE(files).set({ createdBy: cb }).where({ ID: uid });
                
                console.log("Updated records:", up1);
                
                // Return success message or updated records count if needed
                return up1;
            } catch (error) {
                console.error("Error updating records:", error);
                // Handle error
                throw error; // or return appropriate error response
            }
        }
        

    })
}