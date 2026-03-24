const dictionary = {
  // Shared / Layout
  'hero_title': { en: 'FarmLens AI', ta: 'ஃபார்ம்லென்ஸ் ஏஐ' },
  'nav_dashboard': { en: 'Dashboard', ta: 'கட்டுப்பாட்டு அறை' },
  'dash_crop': { en: 'Crop Advisor', ta: 'பயிர் ஆலோசகர்' },
  'dash_disease': { en: 'Disease Scan', ta: 'நோய் ஸ்கேன்' },
  'dash_history': { en: 'History', ta: 'வரலாறு' },
  'nav_profile': { en: 'Profile Settings', ta: 'சுயவிவர அமைப்புகள்' },
  'view_all': { en: 'View All', ta: 'அனைத்தையும் பார்' },
  'table_date': { en: 'Date', ta: 'தேதி' },
  'table_result': { en: 'Diagnosis Result', ta: 'கண்டறிதல் முடிவு' },
  'table_conf': { en: 'AI Confidence', ta: 'AI நம்பிக்கை' },
  'table_status': { en: 'Status', ta: 'நிலை' },
  'badge_safe': { en: 'Safe', ta: 'பாதுகாப்பானது' },
  'badge_unsure': { en: 'Unsure', ta: 'உறுதியற்றது' },
  'badge_detected': { en: 'Detected', ta: 'கண்டறியப்பட்டது' },

  // Dashboard
  'dash_welcome_prefix': { en: 'Welcome Back, ', ta: 'மீண்டும் நல்வரவு, ' },
  'dash_welcome_fallback': { en: 'Welcome to FarmLens AI.', ta: 'ஃபார்ம்லென்ஸ் ஏஐ க்கு வரவேற்கிறோம்.' },
  'dash_subtitle': { en: "Monitor your farm's health, analyze soil data, and get instant disease diagnostics.", ta: 'உங்கள் பண்ணையின் ஆரோக்கியத்தை கண்காணித்து, மண் தரவை பகுப்பாய்வு செய்து, உடனடி நோய் கண்டறிதலைப் பெறுங்கள்.' },
  'live_weather': { en: 'Live Weather Summary', ta: 'நேரலை வானிலை சுருக்கம்' },
  'weather_val': { en: '28°C, Clear', ta: '28°C, தெளிவானது' },
  'fetching_data': { en: 'Fetching...', ta: 'தரவு பெறப்படுகிறது...' },
  'rain_forecast': { en: 'Rain Forecast', ta: 'மழை முன்னறிவிப்பு' },
  'next_rain': { en: 'Next rain expected: Tomorrow', ta: 'அடுத்த மழை எதிர்பார்ப்பு: நாளை' },
  'rain_chance_lbl': { en: 'Chance', ta: 'வாய்ப்புகள்' },
  'no_rain_data': { en: 'No local data', ta: 'உள்ளூர் தரவு இல்லை' },
  'weather_clear': { en: 'Clear', ta: 'தெளிவானது' },
  'weather_cloudy': { en: 'Cloudy', ta: 'மேகமூட்டம்' },
  'weather_rainy': { en: 'Rainy', ta: 'மழைக்காலம்' },
  'feels_like_lbl': { en: 'Feels like:', ta: 'உணர்வது:' },
  'humidity_lbl': { en: 'Humidity:', ta: 'ஈரப்பதம்:' },
  'wind_speed_lbl': { en: 'Wind:', ta: 'காற்று:' },
  'soil_optimal_moisture': { en: 'Optimal Moisture', ta: 'உகந்த ஈரப்பதம்' },
  'soil_dry_soil': { en: 'Dry Soil', ta: 'வறண்ட மண்' },
  'soil_high_moisture': { en: 'High Moisture', ta: 'அதிக ஈரப்பதம்' },
  'soil_insights': { en: 'Soil Insights', ta: 'மண் கருத்துக்கள்' },
  'soil_val': { en: 'Optimal Moisture', ta: 'உகந்த ஈரப்பதம்' },
  'est_soil_lbl': { en: 'Est. Soil:', ta: 'மதிப்பிடப்பட்ட மண்:' },
  'ph_range_lbl': { en: 'pH Range:', ta: 'pH வரம்பு:' },
  'soil_desc_lbl': { en: 'Estimated profile based on regional location.', ta: 'பிராந்திய இருப்பிடத்தின் அடிப்படையில் மதிப்பிடப்பட்டது.' },
  'rain_none': { en: 'No rain expected', ta: 'இன்று மழை எதிர்பார்க்கப்படவில்லை' },
  'rain_expected': { en: 'Rain expected', ta: 'விரைவில் மழை எதிர்பார்க்கப்படுகிறது' },
  'rain_slight': { en: 'Slight chance of rain', ta: 'லேசான மழைக்கு வாய்ப்பு' },
  'horizon_today': { en: 'later today', ta: 'இன்று பின்னர்' },
  'horizon_tomorrow': { en: 'tomorrow', ta: 'நாளை' },
  'expected_rain_lbl': { en: 'Expected Amount:', ta: 'எதிர்பார்க்கப்படும் அளவு:' },
  'rain_desc_lbl': { en: 'Based on maximum daily precipitation forecast.', ta: 'அதிகபட்ச தினசரி முன்னறிவிப்பின் அடிப்படையில்.' },
  'healthy_count_lbl': { en: 'Total Healthy: ', ta: 'மொத்த ஆரோக்கியமானது: ' },
  'disease_free_lbl': { en: 'Disease-free rate from AI', ta: 'AI மூலம் நோய் இல்லாத விகிதம்' },
  'disease_count_lbl': { en: 'Detected Diseases: ', ta: 'கண்டறியப்பட்ட நோய்கள்: ' },
  'scan_history_lbl': { en: 'Lifetime scans recorded', ta: 'பதிவுசெய்யப்பட்ட வாழ்நாள் ஸ்கேன்கள்' },
  'healthy_scans': { en: 'Healthy Scans', ta: 'ஆரோக்கியமான ஸ்கேன்கள்' },
  'total_scans_today': { en: 'Total Scans', ta: 'மொத்த ஸ்கேன்கள்' },
  'recent_disease_scans': { en: 'Recent Disease Scans', ta: 'சமீபத்திய நோய் ஸ்கேன்கள்' },
  'no_recent_scans': { en: 'No recent scans to display.', ta: 'காண்பிக்க சமீபத்திய ஸ்கேன்கள் இல்லை.' },
  'crop_suggestions': { en: 'Crop Suggestions', ta: 'பயிர் பரிந்துரைகள்' },
  'no_prior_recommendations': { en: 'No prior recommendations.', ta: 'முந்தைய பரிந்துரைகள் இல்லை.' },
  'new_analysis': { en: 'New Analysis', ta: 'புதிய பகுப்பாய்வு' },
  'location_lbl': { en: 'Location:', ta: 'இடம்:' },
  'close_lbl': { en: 'Close', ta: 'மூடு' },
  'details_lbl': { en: 'Detailed Insights', ta: 'விரிவான நுண்ணறிவு' },
  'click_more_lbl': { en: 'Click for details', ta: 'விவரங்களுக்கு கிளிக் செய்க' },

  // Crop Recommendation
  'crop_advisor_subtitle': { en: 'Analyze your soil metrics and regional climate to discover the most profitable and suitable crops.', ta: 'தட்பவெப்ப நிலை மற்றும் மண் வகைக்கு ஏற்ற சிறந்த, அதிக லாபம் தரக்கூடிய பயிர்களைக் கண்டறியுங்கள்.' },
  'ai_recommendation': { en: 'AI Recommendation', ta: 'செயற்கை நுண்ணறிவு பரிந்துரை' },
  'based_on': { en: 'Based on parameters:', ta: 'அளவீடுகளின் அடிப்படையில்:' },
  'soil_txt': { en: 'soil,', ta: 'மண்,' },
  'temp_txt': { en: '°C temperature, and', ta: '°C வெப்பநிலை மற்றும்' },
  'hum_txt': { en: '% humidity.', ta: '% ஈரப்பதம்.' },
  'run_another_analysis': { en: 'Run Another Analysis', ta: 'மேலும் பகுப்பாய்வு செய்க' },
  'manual_crop_entry': { en: 'Agricultural Parameters', ta: 'விவசாய அளவீடுகள்' },
  'top_crops_found': { en: 'Optimal Crops Discovered', ta: 'பரிந்துரைக்கப்படும் சிறந்த பயிர்கள்' },
  'season_integrated': { en: '(Current seasonal climate changes integrated securely)', ta: '(தற்போதைய பருவநிலை மாற்றங்களும் கணக்கில் கொள்ளப்பட்டுள்ளன)' },
  'soil_type': { en: 'Soil Type', ta: 'மண் வகை' },
  'select_soil': { en: 'Select predominant soil type...', ta: 'உங்கள் நிலத்தின் மண் வகையைத் தேர்ந்தெடுக்கவும்...' },
  'loamy_soil': { en: 'Loamy Soil', ta: 'களிமண் (Loamy)' },
  'sandy_soil': { en: 'Sandy Soil', ta: 'மணல் (Sandy)' },
  'clay_soil': { en: 'Clay Soil', ta: 'களிமண் (Clay)' },
  'silty_soil': { en: 'Silty Soil', ta: 'வண்டல் (Silt)' },
  'crop_wheat': { en: 'Wheat', ta: 'கோதுமை' },
  'crop_rice': { en: 'Rice', ta: 'அரிசி' },
  'crop_sugarcane': { en: 'Sugarcane', ta: 'கரும்பு' },
  'crop_cotton': { en: 'Cotton', ta: 'பருத்தி' },
  'crop_maize': { en: 'Maize', ta: 'சோளம்' },
  'crop_millets': { en: 'Millets', ta: 'தினை' },
  'crop_barley': { en: 'Barley', ta: 'பார்லி' },
  'crop_soybean': { en: 'Soybean', ta: 'சோயாபீன்' },
  'crop_groundnut': { en: 'Groundnut', ta: 'நிலக்கடலை' },
  'crop_mustard': { en: 'Mustard', ta: 'கடுகு' },
  'crop_sunflower': { en: 'Sunflower', ta: 'சூரியகாந்தி' },
  'crop_potato': { en: 'Potato', ta: 'உருளைக்கிழங்கு' },
  'crop_tomato': { en: 'Tomato', ta: 'தக்காளி' },
  'crop_onion': { en: 'Onion', ta: 'வெங்காயம்' },
  'crop_moong_dal': { en: 'Moong Dal', ta: 'பாசிப்பயறு' },
  'temperature': { en: 'Average Temperature (°C)', ta: 'சராசரி வெப்பநிலை (°C)' },
  'humidity': { en: 'Average Humidity (%)', ta: 'சராசரி ஈரப்பதம் (%)' },
  'generate_smart_recommendation': { en: 'Generate Smart Recommendation', ta: 'சிறந்த பயிர்களைப் பரிந்துரை செய்' },
  'auto_detect_location': { en: 'Auto-Detect Climate Data', ta: 'காலநிலை தரவை தானாக கண்டறி' },
  'location_desc': { en: 'Fetch real-time agricultural data based on your coordinates, or enter manually below.', ta: 'இருப்பிடத்தை வைத்து நிகழ்நேர தரவுகளைப் பெறலாம், அல்லது கீழே நேரடியாக உள்ளிடலாம்.' },
  'get_location': { en: 'Get Live Location', ta: 'தற்போதைய இருப்பிடத்தைப் பெறு' },
  'choose_map': { en: 'Choose Location on Map', ta: 'வரைபடத்தில் அமைவிடத்தைத் தேர்வுசெய்க' },
  'selected_location': { en: 'Selected Location:', ta: 'தேர்ந்தெடுக்கப்பட்ட இடம்:' },
  'locating': { en: 'Locating...', ta: 'கண்டறிகிறது...' },
  'data_filled': { en: 'Data Auto-Filled Successfully!', ta: 'தரவுகள் தானாக நிரப்பப்பட்டன!' },
  'loc_denied': { en: 'Location access denied or unavailable. Please fill manually.', ta: 'இருப்பிட அனுமதி மறுக்கப்பட்டது. தயவுசெய்து நேரடியாக உள்ளிடவும்.' },

  // Disease Prediction (New AI Scanner)
  'disease_ai_title': { en: 'Advanced Plant Disease AI Engine', ta: 'மேம்பட்ட தாவர நோய் AI இயந்திரம்' },
  'disease_ai_subtitle2': { en: 'Upload high-resolution leaf imagery for Deep Learning architectural deformation analysis. Industry-grade classification in seconds.', ta: 'ஆழமான கற்றல் பகுப்பாய்வுக்கு உயர்தர இலையின் படத்தைப் பதிவேற்றவும். சில நொடிகளில் விரிவான வகைப்பாடு.' },
  'drag_drop_title': { en: 'Drag & Drop Image Here', ta: 'படத்தை இங்கே இழுத்து விடவும்' },
  'click_to_browse': { en: 'or click to browse from your device', ta: 'அல்லது உங்கள் சாதனத்திலிருந்து உலாவ கிளிக் செய்யவும்' },
  'image_acquired': { en: 'Image Acquired', ta: 'படம் பெறப்பட்டது' },
  'file_label': { en: 'File: ', ta: 'கோப்பு: ' },
  'ready_neural_net': { en: 'Ready for neural net classification.', ta: 'நரம்பியல் பிணைய வகைப்பாட்டிற்கு தயார்.' },
  'cancel_btn': { en: 'Cancel', ta: 'ரத்துசெய்' },
  'run_dl_scan': { en: 'Run Deep Learning Scan', ta: 'டீப் லேர்னிங் ஸ்கேனை இயக்கவும்' },
  'warning_low_conf': { en: 'Warning: Low confidence detection. The image may be blurry, not a leaf, or contains an unknown pathogen.', ta: 'எச்சரிக்கை: குறைந்த நம்பிக்கை கண்டறிதல். படம் மங்கலாகவோ அல்லது அறியப்படாத நோய்க்கிருமியையோ கொண்டிருக்கலாம்.' },
  'primary_class_match': { en: 'Primary Classification Match', ta: 'முதன்மை வகைப்பாடு பொருத்தம்' },
  'ai_confidence_title': { en: 'AI Confidence', ta: 'AI நம்பிக்கை' },
  'pathology_overview': { en: 'Pathology Overview', ta: 'நோயியல் கண்ணோட்டம்' },
  'immediate_treatment': { en: 'Immediate Treatment', ta: 'உடனடி சிகிச்சை' },
  'prevention_plan_title': { en: 'Prevention Plan', ta: 'தடுப்பு திட்டம்' },
  'other_probs': { en: 'Other Probabilities', ta: 'பிற சாத்தியக்கூறுகள்' },
  'env_os_verify': { en: 'OS Fingerprint Verified', ta: 'OS கைரேகை சரிபார்க்கப்பட்டது' },
  'env_meta_clean': { en: 'Meta-Tag Cleaned', ta: 'மெட்டா-டேக் சுத்தம் செய்யப்பட்டது' },
  'env_res_optimal': { en: 'Resolution: Optimal', ta: 'தெளிவுத்திறன்: உகந்தது' },
  'scan_another': { en: 'Scan Another Image', ta: 'மற்றொரு படத்தை ஸ்கேன் செய்யவும்' },
  'establishing_link': { en: 'Establishing Link to Cloud Neural Net...', ta: 'கிளவுட் நியூரல் நெட்வொர்க்குடன் இணைப்பை ஏற்படுத்துகிறது...' },
  'no_secondary_probs': { en: 'No secondary probabilities calculated.', ta: 'இரண்டாம் நிலை சாத்தியக்கூறுகள் கணக்கிடப்படவில்லை.' },

  // Previous Disease Prediction
  'disease_ai_subtitle': { en: 'Upload a clear picture of a sick plant leaf. Our Deep Learning model will analyze structural deformities to predict the disease pattern.', ta: 'நோய்வாய்ப்பட்ட தாவர இலையின் தெளிவானப் படத்தை பதிவேற்றவும். எங்கள் AI மாதிரி நோய் வடிவத்தை கணிக்க பகுப்பாய்வு செய்யும்.' },
  'scan_another_image': { en: 'Scan Another Image', ta: 'மற்றொரு படத்தை ஸ்கேன் செய்' },
  'primary_match': { en: 'Primary Diagnostic Match', ta: 'முதன்மை நோயறிதல் பொருத்தம்' },
  'ai_confidence': { en: 'AI Confidence', ta: 'AI நம்பிக்கை' },
  'unable_to_identify': { en: 'Unable to confidently identify the disease. Please upload a clearer leaf image.', ta: 'நோயை உறுதியாக கண்டறிய முடியவில்லை. தெளிவான இலை படத்தை பதிவேற்றவும்.' },
  'disease_overview': { en: 'Disease Overview', ta: 'நோய் கண்ணோட்டம்' },
  'recommended_treatment': { en: 'Recommended Treatment', ta: 'பரிந்துரைக்கப்பட்ட சிகிச்சை' },
  'chemical_medicine': { en: 'Chemical/Medicine', ta: 'ரசாயனம் / மருந்து' },
  'prevention_plan': { en: 'Prevention Plan', ta: 'தடுப்பு திட்டம்' },
  'other_probabilities': { en: 'Other Probabilities', ta: 'பிற சாத்தியக்கூறுகள்' },
  'upload_title': { en: 'Drag & Drop Image or Click to Browse', ta: 'படத்தை இழுத்து விடவும் அல்லது உலாவ கிளிக் செய்யவும்' },
  'supported_formats': { en: 'High-resolution JPG, PNG or WEBP formats supported.', ta: 'உயர்தர JPG, PNG அல்லது WEBP வடிவங்கள் ஆதரிக்கப்படுகின்றன.' },
  'run_ai_analysis': { en: 'Run AI Analysis Pipeline', ta: 'AI பகுப்பாய்வை இயக்கு' },

  // History
  'history_title': { en: 'Activity Timeline', ta: 'செயல்பாட்டு காலவரிசை' },
  'history_subtitle': { en: 'Your entire history of crop analyses and ML disease diagnoses securely recorded.', ta: 'உங்கள் பயிர் பகுப்பாய்வு மற்றும் நோய் கண்டறிதல்களின் முழு வரலாறு பாதுகாப்பாக பதிவு செய்யப்பட்டுள்ளது.' },
  'ai_disease_records': { en: 'AI Disease Diagnosis Records', ta: 'AI நோய் கண்டறிதல் பதிவுகள்' },
  'scan_img': { en: 'Scan Img', ta: 'ஸ்கேன் படம்' },
  'predicted_disease': { en: 'Predicted Disease', ta: 'கணிக்கப்பட்ட நோய்' },
  'confidence': { en: 'Confidence', ta: 'நம்பிக்கை' },
  'date_time': { en: 'Date & Time', ta: 'தேதி & நேரம்' },
  'no_ai_scans': { en: 'No AI Scans found.', ta: 'AI ஸ்கேன்கள் எதுவும் காணப்படவில்லை.' },
  'no_records_found': { en: 'No records found.', ta: 'எந்த பதிவுகளும் காணப்படவில்லை.' },

  // Profile
  'profile_title': { en: 'Personalized Farm Profile', ta: 'தனிப்பயனாக்கப்பட்ட பண்ணை சுயவிவரம்' },
  'profile_subtitle': { en: 'Manage your geolocation and farm dimensions to enhance AI precision tailoring.', ta: 'AI துல்லியத்தை அதிகரிக்க உங்கள் புவிஇருப்பிடம் மற்றும் பண்ணை பரிமாணங்களை நிர்வகிக்கவும்.' },
  'contact_number': { en: 'Contact Number', ta: 'தொடர்பு எண்' },
  'geo_coordinates': { en: 'Geographical Coordinates (Auto-Fetch via GPS)', ta: 'புவியியல் ஒருங்கிணைப்புகள் (GPS மூலம் தானியங்கு பெறுதல்)' },
  'auto': { en: 'Auto', ta: 'தானியங்கு' },
  'farm_area_size': { en: 'Farm Area Size (Acres/Hectares)', ta: 'பண்ணை பரப்பளவு (ஏக்கர்/ஹெக்டேர்)' },
  'save_config': { en: 'Save Configuration', ta: 'உள்ளமைவை சேமி' }
};

function switchLanguage() {
  let currentLang = localStorage.getItem('lang') || 'en';
  let newLang = currentLang === 'en' ? 'ta' : 'en';
  localStorage.setItem('lang', newLang);
  applyTranslation(newLang);
}

function applyTranslation(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key] && dictionary[key][lang]) {
      // Store original child elements that are not text nodes
      // Specifically handling the case where elements contain <i> icons or variables inside
      if (el.tagName === 'INPUT' && el.type === 'submit') {
        el.value = dictionary[key][lang];
      } else if (el.tagName === 'INPUT' && el.placeholder) {
        el.placeholder = dictionary[key][lang];
      } else if (el.tagName === 'OPTION') {
        el.textContent = dictionary[key][lang];
      } else {
        // To keep inner HTML tags (like icons), we only replace the text part if needed,
        // but for simplicity, we provide full translated HTML string or let user structure nicely.
        // We'll replace innerHTML, so if there's an icon, we should redefine it in HTML or dictionary.
        // If it's a child element that needs preserving, we avoid destroying it.
        if (el.children.length === 0 || key === 'hero_title' || key.startsWith('nav_')) {
          el.innerHTML = dictionary[key][lang];
        } else {
          // Look for text node to replace without removing icons
          Array.from(el.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
              // Only replace the first non-empty text node
              node.nodeValue = " " + dictionary[key][lang] + " ";
            }
          });
          // If no text node was found (e.g. wiped), set innerHTML
          if (el.textContent.trim() === '' && el.children.length > 0) {
            // Fallback is just append text
            el.innerHTML += " " + dictionary[key][lang];
          }
        }
      }
    }
  });

  // Custom overrides where text and HTML is tightly coupled

  // Update button text
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.innerText = lang === 'en' ? 'தமிழ்' : 'English';
  }

  // Special handlers for dash welcome which has dynamic username
  const dashWelcome = document.getElementById('dash_welcome');
  if (dashWelcome && window.currentUserName) {
    dashWelcome.innerHTML = (lang === 'en' ? dictionary['dash_welcome_prefix'].en : dictionary['dash_welcome_prefix'].ta) + window.currentUserName + '.';
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('lang') || 'en';
  applyTranslation(currentLang);
});
