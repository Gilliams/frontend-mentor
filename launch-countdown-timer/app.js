// Adapted from https://codepen.io/shshaw/pen/vKzoLL

function CountdownTracker(label, value){

    var el = document.createElement('div');
  
    el.className = 'flip-clock__piece';
    el.innerHTML = '<div class="flip-clock__card card"><div class="card__top"></div><div class="card__bottom"></div><div class="card__back"><div class="card__bottom"></div></div></div>' + 
      '<p class="flip-clock__slot">' + label + '</p>';
  
    this.el = el;
  
    var top = el.querySelector('.card__top'),
        bottom = el.querySelector('.card__bottom'),
        back = el.querySelector('.card__back'),
        backBottom = el.querySelector('.card__back .card__bottom');
  
    this.update = function(val){
      val = ( '0' + val ).slice(-2);
      if ( val !== this.currentValue ) {
        
        if ( this.currentValue >= 0 ) {
          back.setAttribute('data-value', this.currentValue);
          bottom.setAttribute('data-value', this.currentValue);
        }
        this.currentValue = val;
        top.innerText = this.currentValue;
        backBottom.setAttribute('data-value', this.currentValue);
  
        this.el.classList.remove('flip');
        void this.el.offsetWidth;
        this.el.classList.add('flip');
      }
    }
    
    this.update(value);
  }
  
  // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
  
  function getTimeRemaining(deadline){
    const total = Date.parse(deadline) - Date.parse(new Date())
    return {
      "total": total,
      "days": Math.floor( total / (1000 * 60 * 60 * 24)),
      "hours": Math.floor( (total / (1000 * 60 * 60)) % 24),
      "minutes": Math.floor( (total / 1000 / 60) % 60),
      "seconds": Math.floor( (total / 1000) % 60)
    }
  }
  
  function initializeClock(deadline) {
  
   
    this.el = document.createElement('div');
    this.el.className = 'flip-clock';

    let trackers = {}
    let updateFn = getTimeRemaining(deadline)
    let key
    let timeinterval
  
    for( key in updateFn){
      // Si la clé est total on la passe et on continue la boucle
      if ( key === 'total') {continue}
      trackers[key] = new CountdownTracker(key, updateFn[key])
      this.el.appendChild(trackers[key].el)
    }
  
    let i = 0
  
    function updateClock(){
      timeinterval = requestAnimationFrame(updateClock);
  
      if ( i++ % 10 ) { return; }
  
      let totalLeft = getTimeRemaining(deadline)
      if(totalLeft <= 0 ){
        cancelAnimationFrame(timeinterval);
        clearInterval(timeInterval)
      }
  
      for( key in trackers) {
        trackers[key].update( totalLeft[key])
      }
    }
    setTimeout(updateClock,500);
  
  }
  
  let endtime = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);
  let start = new initializeClock(endtime)
  const container = document.querySelector('.container')
  container.appendChild(start.el)
  