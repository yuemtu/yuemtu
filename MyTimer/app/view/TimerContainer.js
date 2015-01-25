Ext.define('MyTimer.view.TimerContainer',{
	extend:'Ext.NavigationView',
	xtype:'timerContainer',
	config: {
		title: 'Timer',
		iconCls:'time',        
		items: [
		        {
		        	xtype: 'timer',
		        }
		]
	}
})