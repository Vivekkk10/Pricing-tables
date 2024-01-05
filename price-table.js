$(document).ready(function() {
  $('.pricing-features li').prepend('<i class="bi bi-check"></i> ');

  $('.switch input').change(function() {
      if(this.checked) {
          console.log('Yearly');
          $('.pricing-price').each(function() {
              var monthlyPrice = parseFloat($(this).text().replace('$', ''));
              var yearlyPrice = (monthlyPrice * 12);
              var discountedYearlyPrice = (yearlyPrice * 0.8).toFixed(2);
              $(this).html('$' + discountedYearlyPrice + '<br><p class="price-month"> Per year</p>'); 
          });
          $('#basic-plan').removeClass('plan-active');
          $('#premium-plan').addClass('plan-active');
      } else {
          console.log('Monthly');
          $('.pricing-price').each(function() {
              var discountedYearlyPrice = parseFloat($(this).text().replace('$', ''));
              var originalYearlyPrice = discountedYearlyPrice / 0.8;
              var monthlyPrice = (originalYearlyPrice / 12).toFixed(2);
              $(this).html('$' + monthlyPrice + '<br><p class="price-month"> Per month</p>');
          });
          $('#premium-plan').removeClass('plan-active');
          $('#basic-plan').addClass('plan-active');
      }
  });
});