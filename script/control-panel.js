const ControlPanel = (function() {
    const el = document.querySelector('.control-panel');

    return {
        init: function() {
            this.render();
            this.event();
		},
        render: function() {
            this.renderSelectList(100, '#hours');
            this.renderSelectList(60, '#minutes');
            this.renderSelectList(60, '#seconds');
        },
        renderSelectList: function(numberOfOptions, cssSelector) {
            const select = el.querySelector(cssSelector);
        
            for (let i = 0; i < numberOfOptions; i++) {
                const option = document.createElement('option');
                
                option.name = i;
                option.innerHTML = i;
                
                select.appendChild(option);
            }
        },
        getFormTime: function() {
            const hours = +document.getElementById('hours').value;
            const minutes = +document.getElementById('minutes').value;
            const seconds = +document.getElementById('seconds').value;
            const time = {
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };

            return time;
        },
        event: function() {
            const startBtn = el.querySelector('#start-btn');
            const stopBtn = el.querySelector('#stop-btn');

            startBtn.addEventListener('click', () => {
                const startEvent = new CustomEvent('start', {
                    detail: this.getFormTime()
                });
                document.dispatchEvent(startEvent);
                // el.querySelector('start-btn').disabled = true;
                // el.querySelector('stop-btn').disabled = false;    
            });

            stopBtn.addEventListener('click', () => {
                const stopEvent = new CustomEvent('stop');
                document.dispatchEvent(stopEvent);
                // el.querySelector('start-btn').disabled = false;
                // el.querySelector('stop-btn').disabled = true;    
            });
        },
	};
})();

export default ControlPanel;