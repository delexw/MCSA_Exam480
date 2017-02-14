(function (worker) {
    function asyncMethod(timeout) {
        setTimeout(function () {
            worker.postMessage(Math.random());
        }, timeout);
    }

    asyncMethod(1000);

    worker.onmessage = function(ev)
    {
        asyncMethod(ev.data.t);
    }
}(self));