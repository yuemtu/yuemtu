Ext.define('MyTimer.view.Impressum', {
	extend: 'Ext.Panel',
	xtype: 'impressum',
	
	config:{
		title:'Imprint',
		iconCls: 'info',
		layout: 'fit',
		styleHtmlContent:true,
		styleHtmlCls:'impressum',
		items: [
	        {
	        	xtype: 'titlebar',
	        	docked: 'top',
	        	title:'Kontaktinformationen',
	        },
	        {
	        	html:[
                    '<div class="container">',
                        '<div class="imprint">',
                            '<p>Yunus Emrah Tuncer</p>',
                            '<p>Kirchstr. 6</p>',
                            '<p>35576 Wetzlar</p>',
                            '<p><a href=\"mailto:yunus.emrah.tuncer@mni.thm.de\">Yunus.Emrah.Tuncer@mni.thm.de</a></p>',
                        '</div>',
                    '</div>'
				].join(""),
	        }
	        ]
	}
})