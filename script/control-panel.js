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
        event: function() {
            const startBtn = el.querySelector('#start-btn');
            const stopBtn = el.querySelector('#stop-btn');

            //Передать в модуль timer объект со значениями формы
            startBtn.addEventListener('click', () => {
                const startEvent = new Event('start');
                document.dispatchEvent(startEvent);
            });

            stopBtn.addEventListener('click', () => {
                const stopEvent = new Event('stop');
                document.dispatchEvent(stopEvent);
            });
        },
	};
})();

export default ControlPanel;