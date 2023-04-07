fetch('https://example.com/data').then( /* code that handles the response */ ).catch( /* code that runs if the server returns an error */ )

const url = 'https:example.com/data';

fetch(url).then((response) => {
    if (response.ok) {
        return response;
    }
    throw Error(response.statusText);
}).then(response => /* do something with response */ ).catch(error => console.log('There was an error!'))

fetch(url)
    .then(response => response.redirect(newURL)) // redirects to another URL
    .then( /* do something else */ )
    .catch(error => console.log('There was an error: ', error))

// response.text()
// response.blob()
// response.json()

const response = new Response('Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});

const request = new Request('https://example.com/data', {
    method: 'GET',
    // POST
    // PUT 
    // PATCH
    // DELETE
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});

fetch(request).then( /* do something with the response */ ).catch( /* handle any errors */ )

fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
}).then( /* do something with the response */ ).catch( /* handle any errors */ )

const headers = new Headers({
    'Content-Type': 'text/plain',
    'Accept-Charset': 'utf-8',
    'Accept-Encoding': 'gzip,deflate'
})
headers.has('Content-Type'); // true
headers.get('Content-Type'); // text/plain
headers.set('Content-Type', 'application/json');
headers.append('Accept-Encoding', 'gzip,deflate');
headers.delete('Accept-Encoding');
for (const entry of headers.entries()) {
    console.log(entry);
} // [ 'Content-Type', 'application/json' ]

const url2 = 'https:example.com/data';
const headers2 = new Headers({
    'Content-Type': 'text/plain',
    'Accept-Charset': 'utf-8',
    'Accept-Encoding': 'gzip,deflate'
})

const request2 = (url2, {
    headers2: headers2
})

fetch(request2).then(function (response2) {
    if (response2.ok) {
        return response2;
    }
    throw Error(response.statusText);
}).then(response2 => /* do something with response */ ).catch(error => console.log('There was an error!'))

{
    // <!doctype html>
    // <html lang='en'>
    // <head>
    // <meta charset='utf-8'>
    // <title>Ajax Example</title>
    // </head>
    // <body>
    // <button id='number'>Number Fact</button>
    // <button id='chuck'>Chuck Norris Fact</button>
    // <div id='output'>
    //     Ajax response will appear here
    // </div>
    // <script src='main.js'></script>
    // </body>

    const textButton = document.getElementById('number');

    const textURL = 'http://numbersapi.com/random';
    const apiURL = 'https://api.chucknorris.io/jokes/random';

    textButton.addEventListener('click', () => {
        fetch(textURL)
            .then(response => {
                outputDiv.innerHTML = 'Waiting for response...';
                if (response.ok) {
                    return response;
                }
                throw Error(response.statusText);
            })
            .then(response => response.text())
            .then(text => outputDiv.innerText = text)
            .catch(error => console.log('There was an error:', error))
    }, false);
}

{
    // <!doctype html>
    // <html lang='en'>
    // <head>
    // <meta charset='utf-8'>
    // <title>To Do List</title>
    // </head>
    // <body>
    // <form id='todo' action='https://jsonplaceholder.typicode.com/todos' method='POST'>
    //     <input type='text' name='task'  placeholder='Add Task' autofocus required>
    //     <button type='submit'>Add Task</button>
    // </form>
    // <script src='main.js'></script>
    // </body>
    // </html>

    const form = document.forms['todo'];
    form.addEventListener('submit', addTask, false);

    function addTask(event) {
        event.preventDefault();
        const number = form.task.value;
        const task = {
            userId: 1,
            title: form.task.value,
            completed: false
        }
        const data = JSON.stringify(task);
        const url = 'https://jsonplaceholder.typicode.com/todos';

        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        const request = new Request(url, {
            method: 'POST',
            header: headers,
            body: data
        })

        fetch(request)
            .then(response => response.json())
            .then(task => console.log(`Task saved with an id of ${task.id}`))
            .catch(error => console.log('There was an error:', error))

    }

    const request = new Request(form.action, {
        method: form.method,
        header: headers,
        body: data
    })
}

