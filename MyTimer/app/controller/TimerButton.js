Ext.define('MyTimer.controller.TimerButton', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            startBtn : 'button#startButton',
            timerView : 'timerContainer',
            setTimeBtn: 'button#setTimeButton',
        },
        control: {
            'button[action=timerButton]':{
            	tap:function(button){
            		if (button.getText()=== "Start") {
            			MyTimer.app.getController("Timer").controlTimer("Start");
            			button.setText("Pause");
            		}
            		else {
            			button.setText("Start");
            			MyTimer.app.getController("Timer").controlTimer("Stop");
            		}
            	}
            },
            'button[action=setTime]':{
            	tap:function(button){
            		var button= this.getSetTimeBtn();
            		var startBtn= this.getStartBtn();
            		var setTimeView = Ext.create('Ext.Picker',{
     	                slots: [
     	                    {
     	                    	name: 'setTime',
     	                    	store: 'Times',
     	                    	value: 10,
     	                    	align: 'center',
     	                    }
     	                   ],
     	                  listeners: {
     	                     change: function(picker, value, eOpts) {
     	                         button.setText("Timer auf "+value.setTime+" Minuten");
     	                         MyTimer.app.getController("Timer").controlTimer("Set",value.setTime);
     	                         startBtn.setText("Start");
     	                     }
     	                 }
     	                    
            		});
            		this.getTimerView().push(setTimeView);
            	}
            }
        }
    },
    
});
