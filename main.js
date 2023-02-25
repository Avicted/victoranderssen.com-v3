window.onload = function () {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    main: '#ff00ff',
                },
            },
        },
    }

    document.getElementById('year').innerHTML = new Date().getFullYear()
    type_writer()

    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

console.log('Hello Friends!')

// TypeWriter Effect
var i = 0
var txt = 'Welcome!'
var speed = 512

function type_writer() {
    if (i < txt.length) {
        document.querySelector('h1').innerHTML += txt.charAt(i)
        i++
        setTimeout(type_writer, speed)
    }
}

function dark_mode_toggle() {
    console.log('Dark Mode Toggle')
    var element = document.body
    element.classList.toggle('dark-mode')

    if (localStorage.theme === 'light') {
        localStorage.theme = 'dark'
    } else {
        localStorage.theme = 'light'
    }

    // refresh page
    location.reload()
}
