let onmessage = function (event) {
    let number = event.data
    console.log('分线程接收到主线程发送的数据:'+number)
    let result = fibonacci(number)
    console.log('分线程向主线程返回数据'+result)
    self.postMessage(result)
}

function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

