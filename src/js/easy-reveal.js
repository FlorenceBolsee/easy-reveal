var blockList = [];
var windowHeight = $(window).height();
var scrollLevel;
var i = 0;

$(document).ready(
  function(){
    $(".easy-reveal").each(
      function(){
        blockList.push({
          block: $(this),
          blockOffset: $(this).offset().top
        });
      }
    );
  }
);

function scroll (){
  $(document).scroll(
    function(){
      scrollLevel = $(window).scrollTop();
      blockList.forEach(function(item) {
        if(scrollLevel > item.blockOffset - windowHeight){
          item.block.addClass("reveal");
        }
        if(scrollLevel == 0){
          item.block.removeClass("reveal");
        }
      });
    }
  );
}

var throttled = _.throttle(scroll, 300);

scroll(throttled);
