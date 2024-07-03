document.addEventListener('DOMContentLoaded', function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    })

    scroll.on('scroll', (args) => {
      const scrollY = args.scroll.y;
      const images = document.querySelectorAll('#imgright .imgcontainer');

      images.forEach((img, index) => {
        const translateX = img.getAttribute('data-translate-x');
        const translateY = img.getAttribute('data-translate-y');
        const initialRotate = parseFloat(img.getAttribute('data-rotate'));
        const rotation = initialRotate + (scrollY * 0.005); // Adjust the multiplier for rotation speed

        img.style.transform = `translate(${translateX}, ${translateY}) rotate(${rotation}deg)`;
      });
    });
});


function valueSetters(){
  gsap.set("#nav a", { y: '-100%', opacity : 0});
    gsap.set("#home span .child", { y: '100%'});
    gsap.set("#home .row img", { opacity: 0});

    document.querySelectorAll("#Visual g").forEach(function(e) {
      var character = e.querySelector("path, polyline");
      if (character) {
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
      }
    });
}

function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    //create two spans 
    var parent = document.createElement("span");
    var child = document.createElement("span");

    //parent andd child both sets their active classes 
    parent.classList.add("parent");
    child.classList.add("child");

    //set parent gets child and child gets elem details 
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    //elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);

});
}

function loaderAnimation(){
    var tl = gsap.timeline();

tl.from("#loader .child span", {
    x: 100,
    duration: 0.8,
    stagger: .2,
    ease: "Power3.easeInOut"
})
.to("#loader .parent .child", {
    y : "-100%",
    duration: 0.8,
    ease: "Circ.easeInOut"
})
.to("#loader", {
    height: 0,
    duration: 1,
    ease: "Circ.easeInOut"
})
.to("#green-div", {
    height: "100%",
    top:0,
    duration: 1,
    delay: -.5,
    ease: "Circ.easeInOut"
})
.to("#green-div", {
    height: "0%",
    duration: 1,
    delay: -.6,
    ease: "Circ.easeInOut",
    onComplete: function(){
      animateHomepage();
    }
})

}

function animateSvg() {
  

  gsap.to("#Visual g path, #Visual g polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: "Expo.easeInOut",
  });
}

function animateHomepage(){

    var tl = gsap.timeline();

    tl
    .to("#nav a",{
      y: 0,
      opacity:1,
      // stagger : .2,
      ease : "Expo.easeInOut"
    })
    .to("#home .parent .child",{
      y: 0,
      // stagger : .1,
      duration: 1.5,
      ease : "Expo.easeInOut"
    })
    .to("#home .row img",{
      opacity: 1,
      delay: -.5,
      ease : "Expo.easeInOut",
      onComplete: function(){
        animateSvg();
      }
    })
}


function cardShow(){
  document.querySelectorAll(".cnt")
  .forEach(function(cnt){
    var showingImage;
    cnt.addEventListener("mousemove", function(dets){
      var index = dets.target.dataset.index;
      var cursorChild = document.querySelector("#cursor").children[index];
      if (cursorChild) {
        cursorChild.style.opacity = 1;
        showingImage = dets.target;
        cursorChild.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        document.querySelector("#work-part2").style.backgroundColor = dets.target.dataset.bgColor;
      }
    });

    cnt.addEventListener("mouseleave", function(dets){
      var index = showingImage ? showingImage.dataset.index : null;
      if (index !== null) {
        var cursorChild = document.querySelector("#cursor").children[index];
        if (cursorChild) {
          cursorChild.style.opacity = 0;
        }
      }
    });
  });
}

// document.addEventListener('DOMContentLoaded', () => {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
//   });

//   scroll.on('scroll', (args) => {
//     const scrollY = args.scroll.y;
//     const images = document.querySelectorAll('#imgright .imgcontainer');

//     images.forEach((img, index) => {
//       const translateX = img.getAttribute('data-translate-x');
//       const translateY = img.getAttribute('data-translate-y');
//       const initialRotate = parseFloat(img.getAttribute('data-rotate'));
//       const rotation = initialRotate + (-scrollY * 0.1); // Adjust the multiplier for rotation speed

//       img.style.transform = `translate(${translateX}, ${translateY}) rotate(${rotation}deg)`;
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const workPart2 = document.getElementById('work');

//   document.querySelectorAll('.cnt, .button-container').forEach(element => {
//     element.addEventListener('mouseover', (e) => {
//       const bgColor = e.target.closest('.cnt').getAttribute('data-bgcolor');
//       workPart2.style.backgroundColor = bgColor;
//     });

//     element.addEventListener('mouseout', () => {
//       workPart2.style.backgroundColor = ''; // Reset background color
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const workPart2 = document.getElementById('work');

  document.querySelectorAll('.cnt,.button-container').forEach(img => {
      img.addEventListener('mouseover', (e) => {
          const bgColor = e.target.getAttribute('data-bgcolor');
          workPart2.style.backgroundColor = bgColor;
      });

      img.addEventListener('mouseout', () => {
          workPart2.style.backgroundColor = ''; // Reset background color
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const workPart2 = document.getElementById('work');

  document.querySelectorAll('button-container').forEach(img => {
      img.addEventListener('mouseover', (e) => {
          const bgColor = e.target.getAttribute('data-bgcolor');
          workPart2.style.backgroundColor = bgColor;
      });

      img.addEventListener('mouseout', () => {
          workPart2.style.backgroundColor = ''; // Reset background color
      });
  });
});


// function archiveArrow(){
//   document.querySelectorAll('li').forEach(item => {
//     item.addEventListener('mouseover', ()=>{
//       document.querySelector('.arrow').style.display = "block";
//     } )
//   })
// }


revealToSpan();
valueSetters();
loaderAnimation();
cardShow();
//archiveArrow();


// gsap.from("g path", {
//     strokeDasharray: 64.68521881103516,
//     strokeOffset: 64.68521881103516,
//     duration: 1,
//     ease: "Power3.easeInOut"
// })


// document.addEventListener("DOMContentLoaded", function () {
//     const paths = document.querySelectorAll("g path");
  
//     // Set initial strokeDasharray and strokeDashoffset for each path
//     paths.forEach(path => {
//       const length = path.getTotalLength();
//       path.style.strokeDasharray = length;
//       path.style.strokeDashoffset = length;
//     });
  
//     // Animate the paths
//     gsap.to(paths, {
//       strokeDashoffset: 0,
//       duration: 2,
//       ease: "power3.easeInOut",
//       stagger: 0.2,
//       onUpdate: function() {
//         paths.forEach(path => {
//           path.style.visibility = 'visible';
//         });
//       },
//       onStart: function() {
//         paths.forEach(path => {
//           path.style.visibility = 'hidden';
//         });
//       },
//       onComplete: function() {
//         paths.forEach(path => {
//           path.style.visibility = 'visible';
//         });
//       }
//     });
//   });


  
  


