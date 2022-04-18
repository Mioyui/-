<template>
        <div class="all-container" >
  <h1 class='header-text' style="margin-bottom:100px">have a nice day  </h1>
  <div class="row groom-row">
  <div class="diamond groom groom1">
    <div class="picture" data-name="Rick Martin" data-title="Best Man">
        <img src="../../public/images/01.jpg" alt="">
    </div>
    </div>
  <div class="diamond groom groom2">
    <div class="picture" data-name="Shawn Collier" data-title="Groomsman">
        <img src="../../public/images/02.jpg" alt="">
    </div>
    </div>
  <div class="diamond groom groom3">
    <div class="picture" data-name="Alex White" data-title="Groomsman">
        <img src="../../public/images/03.jpg" alt="">
    </div>
    </div>
  <div class="diamond groom groom4">
    <div class="picture" data-name="Roger Ardito" data-title="Groomsman">
        <img src="../../public/images/04.jpg" alt="">
    </div>
    </div> 
  <div class="diamond groom groom5">
    <div class="picture" data-name="Quentin Davis" data-title="Groomsman">
        <img src="../../public/images/05.jpg" alt="">
    </div>
    </div>
  </div>
  <div class="row bride-row">
    <div class="diamond bride bride1">
    <div class="picture" data-name="Crystal Foster" data-title="Maid of Honor">
        <img src="../../public/images/06.jpg" alt="">
    </div>
    </div>
  <div class="diamond bride bride2">
    <div class="picture" data-name="Jackie Morris" data-title="Bridesmaid">
        <img src="../../public/images/09.jpg" alt="">
    </div>
    </div>
  <div class="diamond bride bride3">
    <div class="picture"  data-name="Julia Silva" data-title="Bridesmaid">
        <img src="../../public/images/11.jpg" alt="">
    </div>
    </div>
  <div class="diamond bride bride4">
    <div class="picture"  data-name="Eliza Hammonds" data-title="Bridesmaid">
        <img src="../../public/images/07.jpg" alt="">
    </div>
    </div>
  <div class="diamond bride bride5">
    <div class="picture"  data-name="Melissa Henry" data-title="Bridesmaid">
        <img src="../../public/images/10.jpg" alt="">
    </div>
    </div>
  </div>
</div>
</template>

<script>


export default {
    name:'Home',
    mounted(){
      console.log("这里是home:",this);
    }
}












</script>

<style lang="scss">
/* .test{
    display: inline-block;
    width: 100px;
    
} */


/* scss样式 */

@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Alfa+Slab+One|Coda:800|Erica+One');
.all-container{

  height: 85vh;
  width: 76vw;
  background: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .row{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  & .header-text{
    font-family: "Amatic SC", Arial, sans-serif;
    font-size: 3em;
    margin-top: -40px;
    
  }
}
.diamond{
  overflow: hidden;
  width: 120px;
  height: 120px;
  min-width: 120px;
  max-width: 120px;
  min-height: 120px;
  cursor: pointer;
  max-height:120px;
  background: #ddcaca;
  margin: auto 25px;
  transform: rotate(45deg);
  box-shadow: inset 10px 10px 1px rgba(0,0,0,.1);
  &.groom{
    transform: rotate(45deg) translateX(0px) translateY(0px);
    outline: 5px solid #5b98e1;
    outline-offset: -5px;
  }
  &.bride{
    transform: rotate(45deg) translateX(35px) translateY(-85px);
    outline: 5px solid #ed9da9;
    outline-offset: -5px;
  }
  & .picture{
background-position: center center;
background-repeat: no-repeat;
background-size: auto auto;
// filter: grayscale(80%);
position: absolute;
width: 140%;
height: 140%;
top: -20%;
left: -20%;
z-index: -1;
-webkit-transform: rotate(-30deg);
transform: rotate(-45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &.hovered{
      transform: scale(1) rotate(-45deg);
      &:before{
        transition: .3s all linear;
        content: '';
        height: 100%;
        width: 100%;
        background-color: rgba(255,255,255,0.8);
        position: absolute;
        //filter: blur(3px)
      }
      & p{
        //margin:0;
        //padding: 0;
        font-family: "Alfa Slab One", arial;
        animation-name: wordflyin;
        animation-duration: .3s;
        animation-timing-function: ease;
        color: #313131;
        position: absolute;
        margin-top: 10px;
        top:38%;
        font-size: .9em;
        & p.flyout{
          animation-name: wordflyout;
          animation-duration: .2s;
        }
        &.view-title{
          font-size:.7em;
          top:  52%;
        }
      }
    }
    // &.clicked{
    //   //background: rgba(255,255,255,.8);
    //     //filter: grayscale(100%) opacity(.2);
    // }
  }
}

//nudging images due to different dimensions
.bride.bride1 .picture{
  background-position: 80% 0%;
  background-size: 160% 90%;
}

.bride.bride2 .picture{
  background-position: 60% 0%;
  background-size: 180% 130%;
}
.bride.bride3 .picture{
  background-position: 80% 70%;
  background-size: 130%;
}
.bride.bride4 .picture{
  background-size:170%;
  background-position: 60% 0%;
}
.bride.bride5 .picture{
  background-size:90%;
  background-position: 60% 0%;
}
.groom.groom1 .picture{
  background-size:170%;
  background-position: 30% -200%;
}
.groom.groom2 .picture{
  background-size:300%;
  background-position: 68% 0%;
}
.groom.groom3 .picture{
  background-size:250%;
  background-position: 68% 0%;
}
.groom.groom4 .picture{
  background-size:180%;
  background-position: 80% 5%;
}
.groom.groom5 .picture{
  background-size:120%;
  background-position: 50% 10%;
}

@keyframes wordflyin{
  0%{
   margin-top: 200px;
  }
  100%{
    margin-top: 10px;
  }
}
@keyframes wordflyout{
  0%{
   margin-top: 10px;
  }
  100%{
    margin-top: 200px;
  }
}



</style>