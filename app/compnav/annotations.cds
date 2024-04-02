using MyService as service from '../../srv/service';

annotate service.complains with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Complaint Details',
            ID : 'ComplaintDetails',
            Target : '@UI.FieldGroup#ComplaintDetails',
        },
    ],
    UI.FieldGroup #ComplaintDetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : ccomplain_about,
                Label : 'ccomplain_about',
            },{
                $Type : 'UI.DataField',
                Value : cdesc,
                Label : 'cdesc',
            },{
                $Type : 'UI.DataField',
                Value : complainno,
                Label : 'complainno',
            },{
                $Type : 'UI.DataField',
                Value : cpannum,
                Label : 'cpannum',
            },{
                $Type : 'UI.DataField',
                Value : cpono,
                Label : 'cpono',
            },{
                $Type : 'UI.DataField',
                Value : cvencode,
                Label : 'cvencode',
            },],
    }
);
