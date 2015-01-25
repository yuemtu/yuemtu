Ext.define('MyTimer.view.Timer', {
    extend: 'Ext.Panel',
    xtype: 'timer',
    id:'Timer',
    config: {
        title: 'Timer',
        iconCls: 'time',
        layout: 'fit',
        styleHtmlContent:true,
    	styleHtmlCls:'timer',
        items: [ 
            {
            	xtype:'button',
            	text:'Timer auf 10 Minuten',
            	docked:'top',
            	action: 'setTime',
            	itemId: 'setTimeButton',
            },
            {
            	xtype: 'button',
            	text: 'Start',
            	docked:'top',
            	action :'timerButton',
            	itemId:'startButton',
	        },
	        {
	        	xtype:'audio',
	        	hidden:true,
	        	url:'../../MyTimer/resources/wecker-klingel.mp3',
	        	itemId:'buzzer',
	        },
		    ],
		    
    },
    
    
});