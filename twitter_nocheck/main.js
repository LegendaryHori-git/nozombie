setInterval(() => {
    if (location.href != "https://x.com/home") {
        $(document).ready(function () {
            var cellInnerDivElements = $('.r-4qtqp9.r-yyyyoo.r-1xvli5t.r-bnwqim.r-lrvibr.r-m6rgpd.r-1cvl2hr.r-f9ja8p.r-og9te1.r-3t4u6i')
                .closest('[data-testid="cellInnerDiv"]');

            // 最初以外の要素を操作する
            cellInnerDivElements.slice(1).css('display', 'none');
        });
    }
}, 100);