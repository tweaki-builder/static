
  console.log("loaded init.js");
  window.quinnExtensionCdnUrl="https://assets.quinn.live/general/";
  if(!window.Quinn){
    window.Quinn = {
      functions: {},
      api_cache: {},
      requests: {},
      currency_symbol: "",
      view_threshold_miliseconds: 0,
      settings:"{\"story\":{\"visibility\":\"both\",\"hero_text_color\":\"#ffffff\",\"hero_text\":\"WATCH & BUY!\",\"hero_title\":\"Bestsellers\",\"show_hero_story\":true,\"is_sticky\":false,\"website_header_identifier\":\"#shopify-section-header\",\"top_offset_on_collection_mobile\":\"0\",\"top_offset_on_collection_desktop\":\"0\",\"top_offset_on_product_mobile\":\"0\",\"top_offset_on_product_desktop\":\"0\",\"top_offset_on_home_mobile\":\"0\",\"top_offset_on_home_desktop\":\"0\"},\"cards\":{\"visibility\":\"both\",\"show_first_product_price\":true,\"use_variant_price\":true,\"enable_card_carousel_loop\":false,\"cards_to_show_in_loop\":4,\"enable_hover_effect\":false,\"reviewsPlaceholder\":\"New Arrival\",\"cards_heading\":\"\"},\"recommendations\":{\"relatedBadgeText\":\"For you\",\"viewedBadgeText\":\"Previously viewed\",\"incartBadgeText\":\"In you cart\",\"orderedBadgeText\":\"Previously bought\",\"bestSellingBadgeText\":\"\",\"patcBadgeText\":\"\",\"headingText\":\"For you\",\"headingFontFamily\":\"inherit\",\"headingFontWeight\":\"500\",\"headingFontSize\":\"24px\",\"heading_font_color\":\"#00584b\",\"rel_prod_text_color\":\"#ffaa22\",\"productTitleFontFamily\":\"inherit\",\"viewed_prod_text_color\":\"#ffe6b3\",\"prev_viewed_prod_text_color\":\"#ffe6b3\",\"incart_prod_text_color\":\"#cfbdfe\",\"ordered_prod_text_color\":\"#c6f7d5\",\"arrow_bg\":\"#69ea72\",\"arrow_color\":\"#ffffff\"},\"imaxvideo\":{\"visibility\":\"both\"},\"overlay\":{\"close_overlay_back_button\":true,\"change_image_on_variant_change\":true,\"cart_selector\":\"\",\"swatch_selector_keys\":\"color\",\"selector_types\":\"{\\\"Flavour\\\":\\\"size\\\",\\\"Color\\\":\\\"shade\\\",\\\"Shade\\\":\\\"shade\\\",\\\"Variant\\\":\\\"dropdown\\\"}\",\"hide_elements\":\"\",\"swipe_direction\":\"vertical\",\"card_swipe_direction\":\"vertical\",\"prevent_header_update\":false,\"move_to_next_story\":false,\"uniform_group_overlay_ux\":false,\"is_muted\":false,\"overlay_z_index\":999,\"should_open_image_overlay\":true,\"redirect_url\":\"\",\"redirect_product_click\":true,\"show_media_title_in_group_overlay\":false,\"use_swatch_images\":false,\"sort_variant_by_quantity\":true,\"show_overlay_title_for_all_widgets\":true,\"disable_overlay_atc_tracking\":false,\"show_navigation_arrows\":false,\"swatch_option_ignore\":\"\",\"swatch_priority_order\":\"\",\"overlay_outofstock_text\":\"\",\"carousel_mobile_spacing\":20,\"carousel_desktop_spacing\":30,\"move_to_next_video\":false,\"always_show_products\":false},\"floating\":{\"disable_widget\":false,\"floating_type\":\"rectangle\",\"floating_side\":\"right\",\"mobile_floating_right\":5,\"mobile_floating_bottom\":80,\"desktop_floating_right\":5,\"desktop_floating_bottom\":80,\"floating_zindex\":999,\"show_circle_close_btn\":true,\"hide_on_rectangle_close\":false,\"show_after_scroll\":false,\"scroll_distance\":\"100\"},\"floating_tray\":{\"enable_widget\":true,\"mobile_floating_bottom\":\"100\",\"desktop_floating_bottom\":\"100\",\"slider_text\":\"REVIEWS\"},\"general\":{\"cart_provider\":\"custom\",\"should_loop_overlay\":true,\"review_provider\":\"none\",\"currency_symbol\":\" ₹\",\"show_decimal_price\":false,\"store_offers\":\"[]\",\"show_branding\":false,\"branding_text_color\":\"#6D7278\",\"show_overlay_branding\":false,\"overlay_branding_text_color\":\"#FFFFF\",\"show_video_watermark\":false,\"video_watermark_text_color\":\"#6D7278\",\"checkout_video_tagging\":false,\"is_market_enabled\":false,\"default_market_country_code\":\"\",\"gaid\":\"\",\"fbid\":\"\",\"shopflowid\":\"\",\"storeLogoUrl\":\"\",\"vlpFontScript\":\"\",\"storeCDNPrefix\":\"\",\"enable_quinn_cdn\":true,\"revenue_currency\":\"\",\"disable_ga_events\":true,\"disable_fb_events\":true,\"network_interceptor\":false,\"tracking_injection\":true,\"disable_vibrations\":false,\"enable_translation\":false,\"prevent_price_round\":false,\"swap_currency_symbol\":false,\"tracking_type\":\"basic\"},\"customiser\":{\"card_cutoff_price\":\"true\",\"review_provider\":\"none\",\"video_cutoff_price_visibility\":\"true\",\"primaryBtn_title\":\"Shop now\",\"tertiaryBtn_title\":\"More info\",\"tertiaryBtn_visibility\":\"true\",\"secondaryBtn_title\":\"Add to cart\",\"popup_text\":\"Watch & Buy\",\"popup_size\":\"Small\",\"floating_tray_text\":\"\",\"floating_tray_bottom_height\":\"50px\"},\"checkout\":{\"ab_enabled\":false,\"ab_test_id\":\"\"},\"clp\":{\"button_position\":\"top_right\",\"z_index\":\"9999\",\"vertical_offset\":\"10\",\"horizontal_offset\":\"10\",\"button_text\":\"Quick view\"},\"analytics\":{\"disable_atc_analytics_view\":false,\"disable_order_analytics_view\":false,\"disable_cta_analytics_view\":true},\"enable_interceptor\":false,\"cart_tracking\":false,\"ab_testing\":false,\"ab_testing_id\":\"test01\",\"show_ab_testing_analytics\":false,\"ab_control_group_percentage\":\"50\",\"calc_net_speed\":false,\"enable_gif\":false,\"subscription\":{\"plan_name\":\"FREE\"},\"forced_disabled\":false,\"setupCompleted\":true,\"events\":[\"quinn_events_product_view\",\"quinn_events_overlay_open\",\"quinn_events_overlay_close\",\"quinn_events_system_action\",\"quinn_events_custom_action\",\"quinn_events_overlay_media_interaction\",\"quinn_events_overlay_swipe\",\"quinn_events_widget_impression\",\"quinn_events_page_view\",\"quinn_events_page_scroll\",\"quinn_events_cta_clicked\"],\"ab_enabled_on_pages\":[],\"ab_enabled_for_widgets\":[],\"onboarding\":{\"signupCompleted\":true,\"subscribed\":true},\"pallet\":{\"--quinn-primary-text-color\":\"#fff\",\"--quinn-primary-color\":\"#000\",\"--quinn-primary-border-color\":\"#000\",\"--quinn-secondary-text-color\":\"#000\",\"--quinn-secondary-color\":\"#FED716\",\"--quinn-secondary-border-color\":\"#fed716\",\"--quinn-story-outline-color\":\"#000\",\"--quinn-story-title-color\":\"#000000\",\"--quinn-cart-checkout-btn-bg-color\":\"#fff\",\"--quinn-cart-checkout-btn-color\":\"#000\",\"--quinn-cart-checkout-border-color\":\"#eee\"}}"
    };
  }else{
    window.Quinn.settings="{\"story\":{\"visibility\":\"both\",\"hero_text_color\":\"#ffffff\",\"hero_text\":\"WATCH & BUY!\",\"hero_title\":\"Bestsellers\",\"show_hero_story\":true,\"is_sticky\":false,\"website_header_identifier\":\"#shopify-section-header\",\"top_offset_on_collection_mobile\":\"0\",\"top_offset_on_collection_desktop\":\"0\",\"top_offset_on_product_mobile\":\"0\",\"top_offset_on_product_desktop\":\"0\",\"top_offset_on_home_mobile\":\"0\",\"top_offset_on_home_desktop\":\"0\"},\"cards\":{\"visibility\":\"both\",\"show_first_product_price\":true,\"use_variant_price\":true,\"enable_card_carousel_loop\":false,\"cards_to_show_in_loop\":4,\"enable_hover_effect\":false,\"reviewsPlaceholder\":\"New Arrival\",\"cards_heading\":\"\"},\"recommendations\":{\"relatedBadgeText\":\"For you\",\"viewedBadgeText\":\"Previously viewed\",\"incartBadgeText\":\"In you cart\",\"orderedBadgeText\":\"Previously bought\",\"bestSellingBadgeText\":\"\",\"patcBadgeText\":\"\",\"headingText\":\"For you\",\"headingFontFamily\":\"inherit\",\"headingFontWeight\":\"500\",\"headingFontSize\":\"24px\",\"heading_font_color\":\"#00584b\",\"rel_prod_text_color\":\"#ffaa22\",\"productTitleFontFamily\":\"inherit\",\"viewed_prod_text_color\":\"#ffe6b3\",\"prev_viewed_prod_text_color\":\"#ffe6b3\",\"incart_prod_text_color\":\"#cfbdfe\",\"ordered_prod_text_color\":\"#c6f7d5\",\"arrow_bg\":\"#69ea72\",\"arrow_color\":\"#ffffff\"},\"imaxvideo\":{\"visibility\":\"both\"},\"overlay\":{\"close_overlay_back_button\":true,\"change_image_on_variant_change\":true,\"cart_selector\":\"\",\"swatch_selector_keys\":\"color\",\"selector_types\":\"{\\\"Flavour\\\":\\\"size\\\",\\\"Color\\\":\\\"shade\\\",\\\"Shade\\\":\\\"shade\\\",\\\"Variant\\\":\\\"dropdown\\\"}\",\"hide_elements\":\"\",\"swipe_direction\":\"vertical\",\"card_swipe_direction\":\"vertical\",\"prevent_header_update\":false,\"move_to_next_story\":false,\"uniform_group_overlay_ux\":false,\"is_muted\":false,\"overlay_z_index\":999,\"should_open_image_overlay\":true,\"redirect_url\":\"\",\"redirect_product_click\":true,\"show_media_title_in_group_overlay\":false,\"use_swatch_images\":false,\"sort_variant_by_quantity\":true,\"show_overlay_title_for_all_widgets\":true,\"disable_overlay_atc_tracking\":false,\"show_navigation_arrows\":false,\"swatch_option_ignore\":\"\",\"swatch_priority_order\":\"\",\"overlay_outofstock_text\":\"\",\"carousel_mobile_spacing\":20,\"carousel_desktop_spacing\":30,\"move_to_next_video\":false,\"always_show_products\":false},\"floating\":{\"disable_widget\":false,\"floating_type\":\"rectangle\",\"floating_side\":\"right\",\"mobile_floating_right\":5,\"mobile_floating_bottom\":80,\"desktop_floating_right\":5,\"desktop_floating_bottom\":80,\"floating_zindex\":999,\"show_circle_close_btn\":true,\"hide_on_rectangle_close\":false,\"show_after_scroll\":false,\"scroll_distance\":\"100\"},\"floating_tray\":{\"enable_widget\":true,\"mobile_floating_bottom\":\"100\",\"desktop_floating_bottom\":\"100\",\"slider_text\":\"REVIEWS\"},\"general\":{\"cart_provider\":\"custom\",\"should_loop_overlay\":true,\"review_provider\":\"none\",\"currency_symbol\":\" ₹\",\"show_decimal_price\":false,\"store_offers\":\"[]\",\"show_branding\":false,\"branding_text_color\":\"#6D7278\",\"show_overlay_branding\":false,\"overlay_branding_text_color\":\"#FFFFF\",\"show_video_watermark\":false,\"video_watermark_text_color\":\"#6D7278\",\"checkout_video_tagging\":false,\"is_market_enabled\":false,\"default_market_country_code\":\"\",\"gaid\":\"\",\"fbid\":\"\",\"shopflowid\":\"\",\"storeLogoUrl\":\"\",\"vlpFontScript\":\"\",\"storeCDNPrefix\":\"\",\"enable_quinn_cdn\":true,\"revenue_currency\":\"\",\"disable_ga_events\":true,\"disable_fb_events\":true,\"network_interceptor\":false,\"tracking_injection\":true,\"disable_vibrations\":false,\"enable_translation\":false,\"prevent_price_round\":false,\"swap_currency_symbol\":false,\"tracking_type\":\"basic\"},\"customiser\":{\"card_cutoff_price\":\"true\",\"review_provider\":\"none\",\"video_cutoff_price_visibility\":\"true\",\"primaryBtn_title\":\"Shop now\",\"tertiaryBtn_title\":\"More info\",\"tertiaryBtn_visibility\":\"true\",\"secondaryBtn_title\":\"Add to cart\",\"popup_text\":\"Watch & Buy\",\"popup_size\":\"Small\",\"floating_tray_text\":\"\",\"floating_tray_bottom_height\":\"50px\"},\"checkout\":{\"ab_enabled\":false,\"ab_test_id\":\"\"},\"clp\":{\"button_position\":\"top_right\",\"z_index\":\"9999\",\"vertical_offset\":\"10\",\"horizontal_offset\":\"10\",\"button_text\":\"Quick view\"},\"analytics\":{\"disable_atc_analytics_view\":false,\"disable_order_analytics_view\":false,\"disable_cta_analytics_view\":true},\"enable_interceptor\":false,\"cart_tracking\":false,\"ab_testing\":false,\"ab_testing_id\":\"test01\",\"show_ab_testing_analytics\":false,\"ab_control_group_percentage\":\"50\",\"calc_net_speed\":false,\"enable_gif\":false,\"subscription\":{\"plan_name\":\"FREE\"},\"forced_disabled\":false,\"setupCompleted\":true,\"events\":[\"quinn_events_product_view\",\"quinn_events_overlay_open\",\"quinn_events_overlay_close\",\"quinn_events_system_action\",\"quinn_events_custom_action\",\"quinn_events_overlay_media_interaction\",\"quinn_events_overlay_swipe\",\"quinn_events_widget_impression\",\"quinn_events_page_view\",\"quinn_events_page_scroll\",\"quinn_events_cta_clicked\"],\"ab_enabled_on_pages\":[],\"ab_enabled_for_widgets\":[],\"onboarding\":{\"signupCompleted\":true,\"subscribed\":true},\"pallet\":{\"--quinn-primary-text-color\":\"#fff\",\"--quinn-primary-color\":\"#000\",\"--quinn-primary-border-color\":\"#000\",\"--quinn-secondary-text-color\":\"#000\",\"--quinn-secondary-color\":\"#FED716\",\"--quinn-secondary-border-color\":\"#fed716\",\"--quinn-story-outline-color\":\"#000\",\"--quinn-story-title-color\":\"#000000\",\"--quinn-cart-checkout-btn-bg-color\":\"#fff\",\"--quinn-cart-checkout-btn-color\":\"#000\",\"--quinn-cart-checkout-border-color\":\"#eee\"}}"
  };
  const pagepath = window.location.pathname.split("/").filter((x) => x).join("/");
  if(pagepath.trim().length <= 0) {
    window.Quinn.page_handle = '/';
  } else {
    window.Quinn.page_handle = pagepath;
  }
  window.Quinn.shop_domain="plixlife.com";
  window.Quinn.settings= typeof window.Quinn.settings=='string' ?  JSON.parse(window.Quinn.settings): window.Quinn.settings;
  window.Quinn.pallet = window.Quinn.settings?.pallet;
  window.Quinn.isNewApp = true;
  window.Quinn.appType='general';
  window.Quinn.overlay_url = "https://assets.quinn.live/general/quinn-overlay.bundle.js";
  window.Quinn.chunk_overlay_cart_btn_url = "https://assets.quinn.live/general/CartButton-svelte.js";
  window.Quinn.chunk_overlay_info_product_description_url = "https://assets.quinn.live/general/OverlayInfoProductDescription-svelte.js";
  window.Quinn.chunk_overlay_info_product_images_url =  "https://assets.quinn.live/general/OverlayInfoProductImages-svelte.js"
  window.Quinn.chunk_overlay_info_products_url =  "https://assets.quinn.live/general/OverlayInfoProducts-svelte.js"
  window.Quinn.chunk_overlay_info_variants_url =  "https://assets.quinn.live/general/OverlayInfoVariants-svelte.js"
  window.Quinn.chunk_overlay_mobile_products_container_url =  "https://assets.quinn.live/general/OverlayMobileProductsContainer-svelte.js"
  window.Quinn.chunk_overlay_variants_url =  "https://assets.quinn.live/general/OverlayInfoVariants-svelte.js"
  window.Quinn.chunk_overlay_video_group_url =  "https://assets.quinn.live/general/OverlayVideoGroup-svelte.js"
  window.Quinn.chunk_overlay_video_url =  "https://assets.quinn.live/general/OverlayVideo-svelte.js"
  window.Quinn.chunk_overlay_volume_btn_url =  "https://assets.quinn.live/general/VolumeButton-svelte.js";
  window.Quinn.currency_symbol = window.Quinn.settings.general.currency_symbol;
  
window.Quinn.functions.getProductsById=()=>{}
window.quinnIgnoreClick = function () {};

const storeFrontRequest = async function storeFrontRequest({ ids }) {
  try {
    if (!Quinn.api_cache) Quinn.api_cache = {};
    const url = `https://plixlifehapi.farziengineer.co/rest/get_products/?product_ids=${ids.join(
      ","
    )}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
    });
    const responseBody = await response.json();
    if (!responseBody || !responseBody.products_data) return null;

    return responseBody.products_data;
  } catch (e) {
    console.log("Could not fetch products");
    return {};
  }
};

console.log("Version 2.1");

window.Quinn.functions.getProductsById = async ({ ids, handles }) => {
  if (ids.length === 0) {
    return { products: [] };
  }
  try {
    const data = await storeFrontRequest({
      ids: ids.map((id) => atob(id).split(":")[1]),
    });

    if (!data) {
      return { products: [] };
    }
    const productsArray = Object.values(data);

    const products = productsArray.map((product) => {
      // Get all prices from variants for price ranges
      const prices = product.variants.map(
        (variant) => variant.pricing.price.gross.amount
      );
      const compare_at_prices = product.variants.map((variant) => {
        const listPrice = variant.metadata.find(
          (m) => m.key === "listPrice"
        )?.value;
        return parseFloat(listPrice || variant.pricing.price.gross.amount);
      });

      prices.sort((a, b) => a - b);
      compare_at_prices.sort((a, b) => a - b);

      return {
        id: product.id,
        title: product.name,
        handle: product.slug,
        sku: product.variants[0]?.sku,
        description: product.seoDescription,
        compareAtPriceRange: {
          minVariantPrice: {
            amount: compare_at_prices[0],
            currencyCode: "Rs.",
          },
          maxVariantPrice: {
            amount: compare_at_prices.pop(),
            currencyCode: "Rs.",
          },
        },
        priceRange: {
          minVariantPrice: {
            amount: prices[0],
            currencyCode: "Rs.",
          },
          maxVariantPrice: {
            amount: prices.pop(),
            currencyCode: "Rs.",
          },
        },
        featuredImage: {
          image_small:
            product.variants[0]?.images?.sort(
              (a, b) => a.sortOrder - b.sortOrder
            )[0]?.url || "",
          image_large:
            product.variants[0]?.images?.sort(
              (a, b) => a.sortOrder - b.sortOrder
            )[0]?.url || "",
        },
        images: {
          nodes:
            product.variants[0]?.images?.map((img) => ({ url: img.url })) || [],
        },
        availableForSale: true,
        tags: [],
        variants: {
          nodes: product.variants
            .filter((variant) => variant.enableVariant)
            .map((variant) => ({
              title: variant.name || "",
              id: variant.id,
              sku: variant.sku,
              selectedOptions: [
                {
                  name: "Variant",
                  value: variant?.metadata.find(
                    (meta) => meta.key === "quinn_variant"
                  )?.value
                    ? JSON.parse(
                        variant?.metadata.find(
                          (meta) => meta.key === "quinn_variant"
                        )?.value
                      )?.variant_name
                    : variant.name,
                },
              ],
              price: {
                amount: variant.pricing.price.gross.amount,
              },
              compareAtPrice: {
                amount:
                  variant.metadata.find((m) => m.key === "listPrice")?.value ||
                  variant.pricing.price.gross.amount,
              },
              availableForSale: true,
              image: {
                url:
                  variant.images.reduce((minImage, currentImage) =>
                    currentImage.sortOrder < minImage.sortOrder
                      ? currentImage
                      : minImage
                  ).url || "",
              },
            })),
        },
        options: [
          {
            id: product.id,
            name: "Variant",
            values: product.variants.map((v) => {
              const value = v?.metadata.find(
                (meta) => meta.key === "quinn_variant"
              )?.value
                ? JSON.parse(
                    v?.metadata.find((meta) => meta.key === "quinn_variant")
                      ?.value
                  )?.variant_name
                : v.name;
              return value;
            }),
          },
        ],
      };
    });
    console.log(`Formatted products`);
    return { products };
  } catch (e) {
    console.log("Could not fetch products", e);
    return { products: [] };
  }
};

window.Quinn.functions.RE_RENDER_FLOATING = async () => {
  const renderedWidgets = { ...window.Quinn.renderedWidgets };
  delete renderedWidgets["floating"];
  window.Quinn.renderedWidgets = renderedWidgets;
  const floatingDiv = document.getElementById("quinn-floating-widget");
  if (floatingDiv) {
    floatingDiv.remove();
  }
  window.Quinn.functions.renderQuinn({ widgetType: "floating" });
};

window.Quinn.functions.CUSTOM_ADD_TO_CART = async () => {
  try {
    if (window?.fcmain_utils?.add_to_cart_quinn) {
      await window?.fcmain_utils.add_to_cart_quinn(
        Quinn.overlayState?.variant?.id
      );
      window.Quinn.Events.trackAddToCart({
        productName: Quinn.overlayState?.product?.title,
        productId: Quinn.overlayState?.product?.id,
        price: Quinn.overlayState?.product?.price,
        quantityAdded: 1,
      });
      window.Quinn.toast.show({
        message: "Product Added to Cart ",
        duration: 2000,
        position: "center",
        type: "success",
      });
    }
  } catch (err) {
    window.Quinn.toast.show({
      message: err || "Something went wrong",
      duration: 2000,
      position: "center",
      type: "error",
    });
    return null;
  }
};

window.Quinn.functions.CUSTOM_CHECKOUT = async () => {
  try {
    if (window?.fcmain_utils?.add_to_cart_checkout_quinn) {
      window.Quinn.Events.trackAddToCart({
        productName: Quinn.overlayState?.product?.title,
        productId: Quinn.overlayState?.product?.id,
        price: Quinn.overlayState?.product?.price,
        quantityAdded: 1,
      });
      await window?.fcmain_utils.add_to_cart_checkout_quinn(
        Quinn.overlayState?.variant?.id
      );
    }
  } catch (err) {
    window.Quinn.toast.show({
      message: err || "Something went wrong",
      duration: 2000,
      position: "center",
      type: "error",
    });
    return null;
  }
};

window.Quinn.functions.CUSTOM_REDIRECT_TO_PRODUCT = async () => {
  if (window?.fcmain_utils?.redirect_to_product_quinn) {
    window.Quinn.Events.systemActionEvent({
      action: "click",
      name: "redirect_to_product_page",
    });
    await window?.fcmain_utils?.redirect_to_product_quinn(
      window.Quinn.overlayState.product.handle,
      window.Quinn.overlayState?.product?.id
    );
  }
  return;
};

window.Quinn.functions.CUSTOM_UPDATE_APP_CART = async () => {
  if (window?.get_cart_count_quinn) {
    const item_count = await window.get_cart_count_quinn();
    return {
      item_count,
    };
  }
};
Quinn.CUSTOM_QUINN_EVENTS = {
  CUSTOM_CHECKOUT: window.Quinn.functions.CUSTOM_CHECKOUT,
  CUSTOM_ADD_TO_CART: window.Quinn.functions.CUSTOM_ADD_TO_CART,
  CUSTOM_REDIRECT_TO_PRODUCT: window.Quinn.functions.CUSTOM_REDIRECT_TO_PRODUCT,
  CUSTOM_UPDATE_APP_CART: window.Quinn.functions.CUSTOM_UPDATE_APP_CART,
};

// Custom css
(function () {
  const css = `
    .quinn_overlayinfo_body_desktop>div:first-child>div,
    .quinn_overlayinfo_body_mobile>div:first-child>div {
      justify-content: center !important;
    }
  `;
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
})();
