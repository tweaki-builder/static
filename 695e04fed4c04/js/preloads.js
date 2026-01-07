
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.DsOoIYnp.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DjK2_kYq.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.DYY2zarA.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.Cwqc4a8q.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.DWF5FP0i.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.D7apj5CL.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.BSREX1Zo.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.CP3k1hdG.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.Dvo5FrEt.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup-legacy.D7nz8564.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.BvbU7nYQ.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.C5W0nz0R.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.CR_ykGVG.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager-legacy.DbzF7QiT.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod-legacy.5maA1cts.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.BeB9hE6Y.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.CJ26z3qG.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.D07C3hBe.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.ByouiqNP.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.DtVrj6vf.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.CmDMONzr.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.fHIQyHrD.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0747/4393/9316/files/billion_shop_black_text_logo_x320.jpg?v=1750414339"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  