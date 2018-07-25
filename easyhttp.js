function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an http GET request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function() {
        //*********************
        // you will get status undefined error bcoz this.http is in diff scope i.e. inside the fn
        //arrow function will work (es6)
        // To fix in es5- set another variable called self 
        // null is for error response in callback
        if (self.http.status === 200) {
            callback(null, self.http.responseText);

        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

// Make an http POST request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);

    this.http.setRequestHeader('content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        //*********************
        // you will get status undefined error bcoz this.http is in diff scope i.e. inside the fn
        //arrow function will work (es6)
        // To fix in es5- set another variable called self 
        // null is for error response in callback
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
    // notice the id - it should be 101 bcoz it was added from their side- REST API
}



// Make an http PUT  request

easyHTTP.prototype.put = function(url, data, callback) {
        this.http.open('PUT', url, true);

        this.http.setRequestHeader('content-type', 'application/json');

        let self = this;
        this.http.onload = function() {
            //*********************
            // you will get status undefined error bcoz this.http is in diff scope i.e. inside the fn
            //arrow function will work (es6)
            // To fix in es5- set another variable called self 
            // null is for error response in callback
            callback(null, self.http.responseText);
        }
        this.http.send(JSON.stringify(data));
        // notice the id - it should be 101 bcoz it was added from their side- REST API
    }
    // Make an http DELETE request

easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
        //*********************
        // you will get status undefined error bcoz this.http is in diff scope i.e. inside the fn
        //arrow function will work (es6)
        // To fix in es5- set another variable called self 
        // null is for error response in callback
        if (self.http.status === 200) {
            callback(null, 'Post Deleted');

        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}