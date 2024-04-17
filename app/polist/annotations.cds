using MyService as service from '../../srv/service';
annotate service.poheader with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'pono',
                Value : pono,
            },
            {
                $Type : 'UI.DataField',
                Label : 'vendor',
                Value : vendor,
            },
            {
                $Type : 'UI.DataField',
                Label : 'pannum',
                Value : pannum,
            },
            {
                $Type : 'UI.DataField',
                Label : 'type',
                Value : type,
            },
            {
                $Type : 'UI.DataField',
                Label : 'amount',
                Value : amount,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'pono',
            Value : pono,
        },
        {
            $Type : 'UI.DataField',
            Label : 'vendor',
            Value : vendor,
        },
        {
            $Type : 'UI.DataField',
            Label : 'pannum',
            Value : pannum,
        },
        {
            $Type : 'UI.DataField',
            Label : 'type',
            Value : type,
        },
        {
            $Type : 'UI.DataField',
            Label : 'amount',
            Value : amount,
        },
    ],
);
