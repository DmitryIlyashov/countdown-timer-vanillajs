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
        event() {
            const startBtn = el.querySelector('.start-btn');
            const stopBtn = el.querySelector('.stop-btn');

            startBtn.addEventListener('click', () => {
                const startEvent = new CustomEvent('start', {
                    detail: this.getFormTime()
                });

                document.dispatchEvent(startEvent);

                el.querySelector('form').classList.remove('show');
                el.querySelector('form').classList.add('hide');
                el.querySelector('.start-btn').classList.remove('show');
                el.querySelector('.start-btn').classList.add('hide');    
                el.querySelector('.stop-btn').classList.remove('hide');
                el.querySelector('.stop-btn').classList.add('show');    
            });

            stopBtn.addEventListener('click', () => {
                const stopEvent = new CustomEvent('stop');

                document.dispatchEvent(stopEvent);

                el.querySelector('form').classList.remove('hide');
                el.querySelector('form').classList.add('add');
                el.querySelector('.start-btn').classList.remove('hide');
                el.querySelector('.start-btn').classList.add('show');    
                el.querySelector('.stop-btn').classList.remove('show');
                el.querySelector('.stop-btn').classList.add('hide');     
            });
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
	};
})();

export default ControlPanel;