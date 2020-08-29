$(function() {
  // 固定する要素を取得
  var $fixedElement = $('.js-sticky');

  // 固定する要素があるとき
  if ($fixedElement.length) {
    // 固定する要素の高さを取得(複数ある場合を考えて配列で保存)
    var fixedOffsets = $fixedElement.map(function(index, element) {
      return $(element).offset().top;
    });

    // スクロールイベント
    $(window).scroll(
      $.throttle(250, function() {
        // スクロール位置を取得
        var scrollTop = $(this).scrollTop();

        // .js-stickyの要素をすべてチェックする
        fixedOffsets.each(function(index, offset) {
          // 固定要素の位置よりも下にスクロールされているとき
          if (scrollTop > offset) {
            // 要素を固定する
            $fixedElement.eq(index).addClass('is-fixed')
            return;
          }

          // 元のメニュー位置より上のときはもとに戻す
          $fixedElement.eq(index).removeClass('is-fixed');
        });
      })
    );
  }
});
