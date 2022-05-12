const ControlPanel = (function() {
    const el = document.querySelector('.control-panel');

    return {
        init() {
            this.render();
            this.event();
		},
        render() {
            this.renderSelectList(100, '.hours');
            this.renderSelectList(60, '.minutes');
            this.renderSelectList(60, '.seconds');
        },
        renderSelectList(numberOfOptions, cssSelector) {
            const select = el.querySelector(cssSelector);
        
            for (let i = 0; i < numberOfOptions; i++) {
                const option = document.createElement('option');
                
                option.name = i;
                option.innerHTML = i;
                
                select.appendChild(option);
            }
        },
        getFormTime() {
            const hours = +el.querySelector('.hours').value,
                  minutes = +el.querySelector('.minutes').value,
                  seconds = +el.querySelector('.seconds').value,
                  t = hours * 3600 + minutes * 60 + seconds,
                  time = {
                        total: t,
                        hours,
                        minutes,
                        seconds
                  };

            return time;
        },
        event() {
            const startBtn = el.querySelector('.start-btn');
            const stopBtn = el.querySelector('.stop-btn');

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