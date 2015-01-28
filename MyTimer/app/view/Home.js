Ext.define('MyTimer.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    config: {
        title: 'Home',
        iconCls: 'home',

        layout: 'fit',
        scrollable: true,
        styleHtmlContent: true,
        styleHtmlCls: 'homepage',

        html: [
            '<div class="container">',
                '<div class="mainContent">',
                    '<p>Dies ist meine erste App in Sencha Touch ...</p>',
                    '<h1>"Website in der Cloud"</h1>',
                    '<p>2. Hausübung von Yunus Emrah Tuncer</p>',
                '</div>',
            '</div>'
        ].join(""),
        
        items: [
            {
                xtype: 'titlebar',
                title: 'Sencha Touch App - Timer',
                docked:'top',
            }
        ]

    }
})