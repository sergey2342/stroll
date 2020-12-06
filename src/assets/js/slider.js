export class Slider {
    constructor(a, b) {
        this.a = a
        this.b = b
        this.setting = this.b ? {...this.defaultSetting(), ...this.b} : this.b = this.defaultSetting()
        this.slider = document.querySelector(this.a)
        this.sliderList = this.slider.children[0]
        this.sliderTrack = this.sliderList.children[0]
        this.slides = this.sliderTrack.children
        this.sliderDots = document.querySelector(`${this.a} .slider-dots`)

        this.currentWindowSize = { width: undefined, height: undefined }
        this.currentSlideWidth = 0
        this.currentSliderTrack = 0    
        this.currentSettingItems = 1
        this.currentPage = 1
        this.currentSlide = 1
        this.currentAmountPages = 1
        this.currentDots = 0
        this.currentPos = 0
        this.currentMouseX = 0
        this.currentMouseX2 = 0
        this.currentScroll = 0
    }

    defaultSetting() {
        return {
            items: 1,
            gap: 0
        }
    }

    currentWidthSlideF(items) {
        for(let slide of this.slides) {
            const w = ((this.sliderList.offsetWidth - (this.setting.gap * (items - 1)))  / items)
            this.currentSlideWidth = w
            slide.style.width = `${w}px`
        }
    }

    currentTrackWidthF() {
        const w = (this.currentSlideWidth * this.slides.length) + (this.slides.length * this.setting.gap - this.setting.gap)
        this.sliderTrack.style.width = `${w}px`
        this.currentSliderTrack = w
    }

    currentDotsF() {
        let dots = document.createElement('div')
        dots.classList.add('slider-dots')
        this.currentDots = 0

        for(let i = 0; i < this.currentAmountPages; i++) {
            let dot = document.createElement('span')
            dot.classList.add('slider-dot')
            if((i + 1) === this.currentPage) { dot.classList.add('active') }
            dot.setAttribute('dot', i + 1)
            dots.appendChild(dot)
            this.currentDots = this.currentDots + 1
        }
        this.sliderDots.replaceWith(dots)
        this.sliderDots = document.querySelector(`${this.a} .slider-dots`)
    }

    initSlides() {
        for(let slide of this.slides) slide.style.marginRight = `${this.setting.gap}px`
        this.slides[this.slides.length - 1].style.margin = `0`
        this.currentTrackWidthF()
        this.currentSettingItems = this.setting.items
        this.currentAmountPagesF(this.currentSettingItems)
        this.currentDotsF()
        this.onClickDotF()
        this.sliderTrack.addEventListener('mousedown', this.swipeStart)
        this.sliderTrack.addEventListener('touchstart', this.swipeStart);
    }

    currentAmountPagesF(items) {
        this.currentAmountPages = Math.ceil(this.slides.length / items)
    }

    updateSlidesF(w) {
        this.currentWidthSlideF(w)
        this.currentTrackWidthF()
        this.currentAmountPagesF(this.currentSettingItems)
        this.currentDotsF()
        this.onClickDotF()
    }

    currentWindowSizeF() {
        const updateSlides = () => {
            this.currentWindowSize = { width: window.innerWidth, height: window.innerHeight }
            this.updateSlidesF(this.currentSettingItems)
            this.updateSlidesOnPageF(window.innerWidth)
            this.updateSlidePosF()
            this.slideToF()
        }
        window.addEventListener("resize", updateSlides)
        updateSlides()
        return () => window.removeEventListener("resize", updateSlides)
    }

    updateSlidesOnPageF(w) {
        if(this.setting.responsive !== undefined) {
            this.setting.responsive.map(item => {
                if(item.breakpoint >= w) {
                    this.currentSettingItems = item.setting.items
                    this.updateSlidesF(this.currentSettingItems)
                } else if(w > 991) {
                    this.currentSettingItems = this.setting.items
                    this.updateSlidesF(this.currentSettingItems)
                }
                return false
            })
        }
    }

    updateActiveDotF(currentPage) {
        let dots = document.querySelectorAll(`${this.a} .slider-dot`)
        dots.forEach(dot => (Number(dot.getAttribute('dot')) === currentPage) ? dot.classList.add('active') : dot.classList.remove('active')) 
    }

    currentPosF(w) {        
        this.sliderTrack.style.transform = `translate3d(${w}px, 0px, 0px)`
        this.currentPos = w
    }

    updateSlidePosF(a) {
        let b = { curr: 0 }
        for(let i = 1; i < this.slides.length + 1; i + 0) {
            if(this.currentSlide >= i && this.currentSlide < (this.currentSettingItems + i)) {
                b.curr += 1
                break
            } else {
                b.curr += 1
            }
            i += this.currentSettingItems
        }
        this.currentPage = b.curr

        !a && this.slideToPageF(this.currentPage)
    }
    
    slideToPageF(num) {
        const w = ((this.currentSettingItems * num - this.currentSettingItems) * (this.currentSlideWidth + this.setting.gap))
        this.currentPosF(-w)
    }

    slideToF() {
        if(this.currentSlide >= (this.slides.length - this.currentSettingItems + 1)) {
            this.updateSlidePosF()
        } else {
            const w = ((this.currentSlide - 1) * (this.currentSlideWidth + this.setting.gap))
            this.currentPosF(-w)
        }
    }

    onClickDotF() {
        this.sliderDots.addEventListener('click', e => {
            if (e.target.tagName !== 'SPAN') return;
            let dots = document.querySelectorAll(`${this.a} .slider-dot`)
            dots.forEach(dot => {
                if(dot === e.target) {
                    this.sliderTrack.style.transition = '.5s ease all';
                    dot.classList.add('active')
                    this.currentPage = Number(dot.getAttribute('dot'))
                    this.currentSlide = (Number(dot.getAttribute('dot')) * this.currentSettingItems - this.currentSettingItems + 1)
                    this.slideToPageF(Number(dot.getAttribute('dot')))
                } else {
                    dot.classList.remove('active')
                }
            })
        })
    }

    getEvent = () => window.event.type.search('touch') !== -1 ? window.event.touches[0] : window.event

    swipeStart = () => {
        this.sliderTrack.style.transition = '0s ease all';
        this.sliderTrack.style.cursor = 'grab'
        
        document.addEventListener('mousemove', this.swipeAction)
        document.addEventListener('mouseup', this.swipeEnd)
        document.addEventListener('touchmove', this.swipeAction);
        document.addEventListener('touchend', this.swipeEnd);
    }

    swipeEnd = () => {
        this.sliderTrack.style.transition = '.5s ease all';
        this.sliderTrack.style.cursor = 'auto'

        if(this.currentPos > 0) {
            this.slideToPageF(1)
        } else if((-this.currentPos + (this.currentSettingItems * (this.currentSlideWidth + this.setting.gap))) > this.currentSliderTrack) {
            this.slideToPageF(this.currentAmountPages)
        } else if(this.currentMouseX2 > 30) {
            this.currentSlide++
            this.slideToF()
        } else if(this.currentMouseX2 < -30) {
            this.currentSlide--
            this.slideToF()
        } else {
            this.slideToF()
        }
        this.updateSlidePosF(2)
        this.updateActiveDotF(this.currentPage)

        this.currentScroll = 0
        this.currentMouseX = 0
        this.currentMouseX2 = 0

        document.removeEventListener('mousemove', this.swipeAction)
        document.removeEventListener('mouseup', this.swipeEnd)
        document.removeEventListener('touchmove', this.swipeAction);
        document.removeEventListener('touchend', this.swipeEnd);
    }

    swipeAction = () => {
        const mouseX = this.getEvent().clientX
        if(this.currentMouseX !== 0) {
            const diffPos = this.currentMouseX - mouseX
            const currentWidth = this.currentPos - diffPos
            this.currentPosF(currentWidth)
            this.currentScroll = currentWidth
            this.currentMouseX2 += diffPos
            this.currentMouseX = 0
        } else {
            this.currentMouseX = mouseX
        }
    }

    updateSlider() {
        this.currentWindowSizeF()
    }

    init() {
        this.initSlides()  
        this.updateSlider()
    }
}