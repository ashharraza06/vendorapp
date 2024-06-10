using MyService as service from '../../srv/service';

annotate service.complains with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'Complaint No',
        Value: complainno,
    },
    {
        $Type: 'UI.DataField',
        Label: 'PO/Invoice Number',
        Value: cpono,
    },
    {
        $Type: 'UI.DataField',
        Label: 'Vendor Code',
        Value: cvencode,
    },
    {
        $Type: 'UI.DataField',
        Label: 'Status',
        Value: cstatus,
    },
]);

annotate MyService.complains with @(UI.HeaderInfo: {
    Title         : {
        $Type: 'UI.DataField',
        Value: '',
    },
    TypeName      : 'Complaint',
    TypeNamePlural: '',
});


annotate service.complains with @(
    UI.Facets                      : [{
        $Type : 'UI.ReferenceFacet',
        Label : 'Complaint Details',
        ID    : 'ComplaintDetails',
        Target: '@UI.FieldGroup#ComplaintDetails',
    }, ],
    UI.FieldGroup #ComplaintDetails: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: complainno,
                Label: 'Complaint No',
            },
            {
                $Type: 'UI.DataField',
                Value: cpono,
                Label: 'PO/Invoice Number',
            },
            {
                $Type: 'UI.DataField',
                Value: cvencode,
                Label: 'Vendor Code',
            },
            {
                $Type: 'UI.DataField',
                Value: ccomplain_about,
                Label: 'Complaint About',
            },
            {
                $Type: 'UI.DataField',
                Value: cstatus,
                Label: 'Status',
            },
            {
                $Type: 'UI.DataField',
                Value: cdesc,
                Label: 'Complaint Description',
            },
        ],
    }
);

annotate service.complains with {
    cdesc @UI.MultiLineText: true
};

annotate service.complains with {
    cdesc @Common.FieldControl: #ReadOnly
};

annotate service.complains with {
    cstatus @Common.FieldControl: #ReadOnly
};

annotate service.complains with {
    ccomplain_about @Common.FieldControl: #ReadOnly
};

annotate service.complains with {
    cvencode @Common.FieldControl: #ReadOnly
};

annotate service.complains with {
    cpono @Common.FieldControl: #ReadOnly
};

annotate service.complains with {
    complainno @Common.FieldControl: #ReadOnly
};

annotate service.complains with @(UI.DeleteHidden: true);

annotate service.complains with @(UI.SelectionPresentationVariant #table: {
    $Type              : 'UI.SelectionPresentationVariantType',
    PresentationVariant: {
        $Type         : 'UI.PresentationVariantType',
        Visualizations: ['@UI.LineItem', ],
    },
    SelectionVariant   : {
        $Type        : 'UI.SelectionVariantType',
        SelectOptions: [
            {
                $Type       : 'UI.SelectOptionType',
                PropertyName: cstatus,
                Ranges      : [{
                    Sign  : #I,
                    Option: #EQ,
                    Low   : 'Reverted',
                }, ],
            },
            {
                $Type       : 'UI.SelectOptionType',
                PropertyName: cvencode,
                Ranges      : [{
                    Sign  : #I,
                    Option: #EQ,
                    Low   : 'null',
                }, ],
            },
        ],
    },
});
