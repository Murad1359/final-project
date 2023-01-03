function myFunction(){
    var element = document.getElementById("myDIV");
    var list = document.getElementById("sect");
   element.classList.toggle("mystyle");
   list.classList.toggle("sect")
}

var typingEffect = new Typed(".multiText", {
    strings : ["Simone Olivia", "a Freelancer", "a Photographer", "a Designer"],
    loop : true,
    typedSpeed : 1000,
    backSpeed : 80,
    startDelay : 1000,
    backDelay : 1500
})


const list = document.querySelector('.list'),
items = document.querySelectorAll('.block-items')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch(targetId) {
            case 'all':
                getItems('block-items')
                break
            case 'design':
                getItems(targetId)
                break
            case 'brand':
                getItems(targetId)
                break
            case 'photos':
                getItems(targetId)
                break
        }

    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}