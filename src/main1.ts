import { TweenMax, SlowMo } from 'gsap'
import { CustomEase } from 'gsap'

const ease = CustomEase.create("hop", "M0,0.005 C0,0.005 0.056,0.445 0.175,0.445 0.294,0.445 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");

const t = TweenMax.to('#rect', 2, {
    backgroundColor: '#FF0000',
    borderColor: 'black',
    borderRadius: 25,
    x: 600,
    rotation: 360,
    scale: 0.5,
    ease: ease
})

t.pause()

setTimeout(() => t.play(), 1000)