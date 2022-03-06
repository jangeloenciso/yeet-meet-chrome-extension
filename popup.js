people = 3;

document.addEventListener(
    'DOMContentLoaded',
    function () {
        var addButton = document.getElementById('add');
        var reduceButton = document.getElementById('reduce');

        addButton.addEventListener(
            'click',
            function () {
                people += 1;
                document.getElementById('minNum').innerHTML = people;
            },
            false
        );
        reduceButton.addEventListener(
            'click',
            function () {
                people -= 1;
                document.getElementById('minNum').innerHTML = people;
            },
            false
        );
    },
    false
);
