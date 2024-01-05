$(document).ready(function() {
  // Listen for changes on the checkbox
  $('.switch input').change(function() {
      if(this.checked) {
          console.log('Yearly');
          // Update pricing to yearly with discount
          $('.pricing-price').each(function() {
              var monthlyPrice = parseFloat($(this).text().replace('$', ''));
              var yearlyPrice = (monthlyPrice * 12);
              var discountedYearlyPrice = (yearlyPrice * 0.8).toFixed(2);
              $(this).html('$' + discountedYearlyPrice + '<br><p class="price-month"> Per year</p>'); 
          });
          // Toggle the border under Premium
          $('#basic-plan').removeClass('plan-active');
          $('#premium-plan').addClass('plan-active');
      } else {
          console.log('Monthly');
          // Update pricing back to monthly
          $('.pricing-price').each(function() {
              var discountedYearlyPrice = parseFloat($(this).text().replace('$', ''));
              var originalYearlyPrice = discountedYearlyPrice / 0.8;
              var monthlyPrice = (originalYearlyPrice / 12).toFixed(2);
              $(this).html('$' + monthlyPrice + '<br><p class="price-month"> Per month</p>');
          });
          // Toggle the border back to Basic
          $('#premium-plan').removeClass('plan-active');
          $('#basic-plan').addClass('plan-active');
      }
  });
});
