document.addEventListener(
    'DOMContentLoaded',
    function () {
        var addButton = document.getElementById('add');
        var reduceButton = document.getElementById('reduce');
        people = 3;
        addButton.addEventListener(
            'click',
            function () {
                people += 1;
                document.getElementById('num').textContent = people;
            },
            false
        );
        reduceButton.addEventListener(
            'click',
            function () {
                people -= 1;
                document.getElementById('num').textContent = people;
            },
            false
        );
    },
    false
);
