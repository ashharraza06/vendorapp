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
            Label : 'PO/Invoice Number',
            Value : pono,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Vendor',
            Value : vendor,
        },
        {
            $Type : 'UI.DataField',
            Label : 'PAN Number',
            Value : pannum,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Type',
            Value : type,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Amount',
            Value : amount,
        },
    ],
);
annotate service.poheader with @(
    UI.SelectionFields : []
);
annotate service.poheader with {
    vendor @Common.Label : 'vendor'
};
annotate service.poheader with @(
    UI.SelectionPresentationVariant #table : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
                {
                    $Type : 'UI.SelectOptionType',
                    PropertyName : vendor,
                    Ranges : [
                        {
                            Sign : #I,
                            Option : #EQ,
                            Low : 'ashhar.raza@peolsolutions.com',
                        },
                    ],
                },],
        },
    }
);
