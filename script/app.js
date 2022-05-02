import ControlPanel from './control-panel.js';
import Timer from './timer.js';

const App = (function() {
	return {
		init: function() {
			ControlPanel.init();
			Timer.init();
		}
    };
})();

App.init();