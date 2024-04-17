const axios = require('axios');
module.exports = async function () {

    let { complains, comment, workitems, workflowhistory, levels } = this.entities;

    this.before('CREATE', 'files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/files(${req.data.ID})/content`
    })

    this.before('READ', 'files', req => {
        //check content-type
        console.log('content-type: ', req.headers['content-type'])
    })
    this.on('triggerProcess', async (req) => {
        debugger
        let result = req.data.data;
        result = JSON.parse(result);
        var comp = result.complainno;
        var compType = result.ccomplain_about
        try {
            // console.log("process trigger");
            // var workitemId;
            // var client = 'sb-60da8103-a679-4130-9d5a-391c2c74976d!b248944|xsuaa!b49390';
            // var secret = 'cdbf545c-34be-419c-9510-0aa752ef51e9$pRpTrBw7nLUtVNga7e3CNtAWfZZVarrTccCpulSFJ8o=';
            // var auth1 = Buffer.from(client + ':' + secret, 'utf-8').toString('base64');
            // // var authString = client + ':' + secret;
            // // var auth1 = window.btoa(authString);
            // // let app = await SELECT.from(workflowhistory);
            // // var approvers1 = await SELECT.from(workflowhistory).where`complainttype = ${compType} and level = '1.0'`
            // // var approvers1 = await SELECT.from(workflowhistory).where({ complainttype: compType, level: '1.0' });
            // var response1 = await axios.request('https://10134ddctrial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials',
            //     {
            //         method: 'POST',
            //         headers: {
            //             'Authorization': 'Basic ' + auth1
            //         }
            //     });
            // console.log(response1);
            // var bodyy = JSON.parse(JSON.stringify({
            //     "definitionId": "us10.10134ddctrial.vendorprocess.vendorProcess",
            //     "context": {

            //         "filter": `complainttype eq '${compType}'`
            //     }
            // }));
            // console.log(bodyy);
            // var response11 = await axios.post(`https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances`, bodyy,
            //     {
            //         headers: {
            //             'Authorization': 'Bearer ' + response1.data.access_token,
            //         }
            //     });
            // workitemId = response11.data.rootInstanceId;

            // await UPDATE(complains).set({ wid: workitemId }).where({ complainno: comp });
            // debugger
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

    })
}