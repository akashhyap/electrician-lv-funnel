"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type FormStep = 'welcome' | 'ev-type' | 'existing-charger' | 'charging-method' | 'install-location' | 'main-goal' | 'electrical-panel' | 'charger-guidance' | 'smart-features' | 'timeline' | 'usage-type' | 'location' | 'contact' | 'review' | 'confirmation';

interface FormData {
  name: string;
  evType: string;
  otherEvType?: string;
  existingCharger: string;
  chargingMethod: string;
  installLocation: string;
  mainGoal: string;
  electricalPanel: string;
  chargerGuidance: string;
  smartFeatures: string;
  timeline: string;
  usageType: string;
  location: string;
  email: string;
  phone: string;
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>('welcome');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    evType: '',
    otherEvType: '',
    existingCharger: '',
    chargingMethod: '',
    installLocation: '',
    mainGoal: '',
    electricalPanel: '',
    chargerGuidance: '',
    smartFeatures: '',
    timeline: '',
    usageType: '',
    location: '',
    email: '',
    phone: ''
  });

  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    if (currentStep === 'welcome') setCurrentStep('ev-type');
    else if (currentStep === 'ev-type') setCurrentStep('existing-charger');
    else if (currentStep === 'existing-charger') setCurrentStep('charging-method');
    else if (currentStep === 'charging-method') setCurrentStep('install-location');
    else if (currentStep === 'install-location') setCurrentStep('main-goal');
    else if (currentStep === 'main-goal') setCurrentStep('electrical-panel');
    else if (currentStep === 'electrical-panel') setCurrentStep('charger-guidance');
    else if (currentStep === 'charger-guidance') setCurrentStep('smart-features');
    else if (currentStep === 'smart-features') setCurrentStep('timeline');
    else if (currentStep === 'timeline') setCurrentStep('usage-type');
    else if (currentStep === 'usage-type') setCurrentStep('location');
    else if (currentStep === 'location') setCurrentStep('contact');
    else if (currentStep === 'contact') setCurrentStep('review');
    else if (currentStep === 'review') setCurrentStep('confirmation');
  };

  const prevStep = () => {
    if (currentStep === 'ev-type') setCurrentStep('welcome');
    else if (currentStep === 'existing-charger') setCurrentStep('ev-type');
    else if (currentStep === 'charging-method') setCurrentStep('existing-charger');
    else if (currentStep === 'install-location') setCurrentStep('charging-method');
    else if (currentStep === 'main-goal') setCurrentStep('install-location');
    else if (currentStep === 'electrical-panel') setCurrentStep('main-goal');
    else if (currentStep === 'charger-guidance') setCurrentStep('electrical-panel');
    else if (currentStep === 'smart-features') setCurrentStep('charger-guidance');
    else if (currentStep === 'timeline') setCurrentStep('smart-features');
    else if (currentStep === 'usage-type') setCurrentStep('timeline');
    else if (currentStep === 'location') setCurrentStep('usage-type');
    else if (currentStep === 'contact') setCurrentStep('location');
    else if (currentStep === 'review') setCurrentStep('contact');
    else if (currentStep === 'confirmation') setCurrentStep('review');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 'review') {
      // Submit form data
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      setCurrentStep('confirmation');
    }
  };

  const renderStepIndicator = () => {
    const totalSteps = 15; // welcome, ev-type, existing-charger, charging-method, install-location, main-goal, electrical-panel, charger-guidance, smart-features, timeline, usage-type, location, contact, review, confirmation
    let currentStepNumber = 1;
    
    if (currentStep === 'welcome') currentStepNumber = 1;
    else if (currentStep === 'ev-type') currentStepNumber = 2;
    else if (currentStep === 'existing-charger') currentStepNumber = 3;
    else if (currentStep === 'charging-method') currentStepNumber = 4;
    else if (currentStep === 'install-location') currentStepNumber = 5;
    else if (currentStep === 'main-goal') currentStepNumber = 6;
    else if (currentStep === 'electrical-panel') currentStepNumber = 7;
    else if (currentStep === 'charger-guidance') currentStepNumber = 8;
    else if (currentStep === 'smart-features') currentStepNumber = 9;
    else if (currentStep === 'timeline') currentStepNumber = 10;
    else if (currentStep === 'usage-type') currentStepNumber = 11;
    else if (currentStep === 'location') currentStepNumber = 12;
    else if (currentStep === 'contact') currentStepNumber = 13;
    else if (currentStep === 'review') currentStepNumber = 14;
    else if (currentStep === 'confirmation') currentStepNumber = 15;

    // For mobile view, show only nearby steps
    const renderMobileStepIndicator = () => {
      // On mobile, only show current step number out of total
      return (
        <div className="flex items-center justify-center w-full mb-4 px-2">
          <div className="bg-gray-100 rounded-full px-4 py-1 text-xs font-medium">
            Step {currentStepNumber} of {totalSteps}
          </div>
        </div>
      );
    };

    // For desktop view, show all step indicators
    const renderDesktopStepIndicator = () => {
      return (
        <div className="flex items-center justify-center w-full mb-6 px-2 overflow-x-auto">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <React.Fragment key={index}>
              {/* Circle indicator */}
              <div
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0 ${index + 1 <= currentStepNumber ? 'bg-[#4CAF50]' : 'bg-gray-200'}`}
              />
              {/* Line between circles */}
              {index < totalSteps - 1 && (
                <div
                  className={`flex-1 h-[1px] mx-1 md:mx-2 min-w-[3px] ${index + 1 < currentStepNumber ? 'bg-[#4CAF50]' : 'bg-gray-200'}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      );
    };

    return (
      <>
        <div className="md:hidden">
          {renderMobileStepIndicator()}
        </div>
        <div className="hidden md:block">
          {renderDesktopStepIndicator()}
        </div>
      </>
    );
  };

  const renderWelcomeStep = () => {
    return (
      <div className="w-full text-center px-2 md:px-0">
        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] leading-tight font-bold mb-3 md:mb-5 text-[#2D3748]"><span className="text-[#ffc107]">FREE 30-MINUTE</span> EV CHARGING CONSULTATION</h1>
        <p className="text-base md:text-xl mb-8 md:mb-12 text-gray-600">Get Your FREE 30-Minute EV Charging Solutions Blueprint!</p>
        
        <button
          onClick={nextStep}
          className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 md:py-4 px-8 md:px-16 rounded-full text-base md:text-xl w-full md:w-auto"
        >
          Get Started →
        </button>
      </div>
    );
  };

  const renderNameStep = () => {
    return (
      <div className="w-full px-1 md:px-0">
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold mb-4 md:mb-8 text-gray-800 text-left">What's your name?</h2>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={updateFormData}
          className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-gray-50 text-base md:text-lg focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
          required
        />
      </div>
    );
  };

  const renderEvTypeStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
        // Clear the otherEvType if the selection is not "other"
        ...( value !== 'other' ? { otherEvType: '' } : {})
      }));
    };

    const handleOtherInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData(prev => ({
        ...prev,
        otherEvType: value
      }));
    };

    return (
      <div className="w-full px-1 md:px-0">
        <h2 className="text-[20px] md:text-[28px] lg:text-[32px] font-bold mb-4 md:mb-8 text-gray-800 text-left">What type of EV do you drive?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.evType === 'tesla' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="evType" 
                value="tesla"
                checked={formData.evType === 'tesla'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.evType === 'tesla' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.evType === 'tesla' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Tesla</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.evType === 'nissan-leaf' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="evType" 
                value="nissan-leaf"
                checked={formData.evType === 'nissan-leaf'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.evType === 'nissan-leaf' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.evType === 'nissan-leaf' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Nissan Leaf</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.evType === 'bmw-i' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="evType" 
                value="bmw-i"
                checked={formData.evType === 'bmw-i'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.evType === 'bmw-i' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.evType === 'bmw-i' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">BMW i Series</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.evType === 'audi-etron' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="evType" 
                value="audi-etron"
                checked={formData.evType === 'audi-etron'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.evType === 'audi-etron' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.evType === 'audi-etron' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Audi e-tron</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.evType === 'other' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="evType" 
                value="other"
                checked={formData.evType === 'other'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.evType === 'other' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.evType === 'other' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Other</span>
          </label>

          {formData.evType === 'other' && (
            <div className="w-full mt-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Please specify your EV type"
                value={formData.otherEvType || ''}
                onChange={handleOtherInput}
                className="w-full py-3 px-4 border border-[#4CAF50] border-opacity-30 rounded-lg bg-white text-lg focus:outline-none focus:ring-1 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition-colors"
                required
                autoFocus
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderExistingChargerStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">Do you already have a home charger installed?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.existingCharger === 'level1' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="existingCharger" 
                value="level1"
                checked={formData.existingCharger === 'level1'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.existingCharger === 'level1' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.existingCharger === 'level1' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Yes, Level 1 (standard outlet)</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.existingCharger === 'level2' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="existingCharger" 
                value="level2"
                checked={formData.existingCharger === 'level2'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.existingCharger === 'level2' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.existingCharger === 'level2' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Yes, Level 2 (240V home charger)</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.existingCharger === 'dcFast' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="existingCharger" 
                value="dcFast"
                checked={formData.existingCharger === 'dcFast'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.existingCharger === 'dcFast' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.existingCharger === 'dcFast' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Yes, DC Fast Charger</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.existingCharger === 'none' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="existingCharger" 
                value="none"
                checked={formData.existingCharger === 'none'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.existingCharger === 'none' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.existingCharger === 'none' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">No, I don't have a charger yet</span>
          </label>
        </div>
      </div>
    );
  };

  const renderChargingMethodStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">How do you usually charge your vehicle today?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.chargingMethod === 'home-outlet' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="chargingMethod" 
                value="home-outlet"
                checked={formData.chargingMethod === 'home-outlet'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.chargingMethod === 'home-outlet' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.chargingMethod === 'home-outlet' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Standard wall outlet at home</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.chargingMethod === 'public' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="chargingMethod" 
                value="public"
                checked={formData.chargingMethod === 'public'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.chargingMethod === 'public' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.chargingMethod === 'public' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Public charging stations</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.chargingMethod === 'workplace' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="chargingMethod" 
                value="workplace"
                checked={formData.chargingMethod === 'workplace'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.chargingMethod === 'workplace' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.chargingMethod === 'workplace' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Workplace charging</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.chargingMethod === 'no-home' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="chargingMethod" 
                value="no-home"
                checked={formData.chargingMethod === 'no-home'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.chargingMethod === 'no-home' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.chargingMethod === 'no-home' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">I don't charge at home yet</span>
          </label>
        </div>
      </div>
    );
  };

  const renderInstallLocationStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">Where would you like your charger to be installed?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.installLocation === 'garage' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="installLocation" 
                value="garage"
                checked={formData.installLocation === 'garage'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.installLocation === 'garage' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.installLocation === 'garage' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Inside a garage</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.installLocation === 'driveway' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="installLocation" 
                value="driveway"
                checked={formData.installLocation === 'driveway'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.installLocation === 'driveway' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.installLocation === 'driveway' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Driveway/outdoor parking</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.installLocation === 'apartment' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="installLocation" 
                value="apartment"
                checked={formData.installLocation === 'apartment'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.installLocation === 'apartment' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.installLocation === 'apartment' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Apartment/condo building</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.installLocation === 'business' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="installLocation" 
                value="business"
                checked={formData.installLocation === 'business'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.installLocation === 'business' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.installLocation === 'business' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Business/commercial property</span>
          </label>
        </div>
      </div>
    );
  };

  const renderLocationStep = () => {
    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">What's your zip code or city?</h2>
        
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter your zip code or city"
          value={formData.location}
          onChange={updateFormData}
          className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
          required
        />
      </div>
    );
  };

  const renderContactStep = () => {
    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">How should we reach you to share your personalized plan?</h2>
        
        <div className="space-y-6">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={updateFormData}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={updateFormData}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              required
            />
          </div>
          
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={updateFormData}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              required
            />
          </div>
        </div>
      </div>
    );
  };

  const renderMainGoalStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">What's your main goal with an EV charger right now?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.mainGoal === 'faster-charging' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="mainGoal" 
                value="faster-charging"
                checked={formData.mainGoal === 'faster-charging'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.mainGoal === 'faster-charging' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.mainGoal === 'faster-charging' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Faster charging at home</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.mainGoal === 'convenience' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="mainGoal" 
                value="convenience"
                checked={formData.mainGoal === 'convenience'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.mainGoal === 'convenience' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.mainGoal === 'convenience' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Adding convenience for daily use</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.mainGoal === 'new-ev' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="mainGoal" 
                value="new-ev"
                checked={formData.mainGoal === 'new-ev'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.mainGoal === 'new-ev' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.mainGoal === 'new-ev' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Preparing for a new EV purchase</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.mainGoal === 'business' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="mainGoal" 
                value="business"
                checked={formData.mainGoal === 'business'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.mainGoal === 'business' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.mainGoal === 'business' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Supporting employees/customers at a business</span>
          </label>
        </div>
      </div>
    );
  };

  const renderElectricalPanelStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">Do you know your home's electrical panel capacity?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.electricalPanel === '100-amps' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="electricalPanel" 
                value="100-amps"
                checked={formData.electricalPanel === '100-amps'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.electricalPanel === '100-amps' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.electricalPanel === '100-amps' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Yes, 100 amps</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.electricalPanel === '200-amps' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="electricalPanel" 
                value="200-amps"
                checked={formData.electricalPanel === '200-amps'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.electricalPanel === '200-amps' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.electricalPanel === '200-amps' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Yes, 200 amps</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.electricalPanel === 'not-sure' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="electricalPanel" 
                value="not-sure"
                checked={formData.electricalPanel === 'not-sure'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.electricalPanel === 'not-sure' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.electricalPanel === 'not-sure' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Not sure / need help checking</span>
          </label>
        </div>
      </div>
    );
  };

  const renderChargerGuidanceStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">Would you like help choosing the right charger brand/model?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          {/* Removed flex-wrap to keep buttons in a single line */}
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.chargerGuidance === 'yes' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="chargerGuidance" 
                value="yes"
                checked={formData.chargerGuidance === 'yes'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.chargerGuidance === 'yes' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.chargerGuidance === 'yes' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Yes, please guide me</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.chargerGuidance === 'no' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="chargerGuidance" 
                value="no"
                checked={formData.chargerGuidance === 'no'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.chargerGuidance === 'no' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.chargerGuidance === 'no' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">No, I already know what I want</span>
          </label>
        </div>
      </div>
    );
  };

  const renderSmartFeaturesStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">Do you want smart charging features?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.smartFeatures === 'yes' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="smartFeatures" 
                value="yes"
                checked={formData.smartFeatures === 'yes'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.smartFeatures === 'yes' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.smartFeatures === 'yes' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Yes (Wi-Fi/app control, usage tracking)</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.smartFeatures === 'no' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="smartFeatures" 
                value="no"
                checked={formData.smartFeatures === 'no'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.smartFeatures === 'no' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.smartFeatures === 'no' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">No, just standard charging is fine</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.smartFeatures === 'not-sure' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="smartFeatures" 
                value="not-sure"
                checked={formData.smartFeatures === 'not-sure'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.smartFeatures === 'not-sure' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.smartFeatures === 'not-sure' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Not sure yet</span>
          </label>
        </div>
      </div>
    );
  };

  const renderTimelineStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">How soon are you planning to install?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.timeline === '2-weeks' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="timeline" 
                value="2-weeks"
                checked={formData.timeline === '2-weeks'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.timeline === '2-weeks' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.timeline === '2-weeks' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Within the next 2 weeks</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.timeline === '1-2-months' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="timeline" 
                value="1-2-months"
                checked={formData.timeline === '1-2-months'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.timeline === '1-2-months' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.timeline === '1-2-months' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">In the next 1–2 months</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.timeline === 'researching' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="timeline" 
                value="researching"
                checked={formData.timeline === 'researching'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.timeline === 'researching' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.timeline === 'researching' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Just researching for now</span>
          </label>
        </div>
      </div>
    );
  };

  const renderUsageTypeStep = () => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="w-full">
        <h2 className="text-[32px] font-bold mb-8 text-gray-800 text-left">Is this for personal use or for a business?</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-start">
          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.usageType === 'personal' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="usageType" 
                value="personal"
                checked={formData.usageType === 'personal'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.usageType === 'personal' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.usageType === 'personal' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Personal (home/residential)</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.usageType === 'business' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="usageType" 
                value="business"
                checked={formData.usageType === 'business'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.usageType === 'business' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.usageType === 'business' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Business (office, fleet, customer use)</span>
          </label>

          <label className={`inline-flex items-center px-5 py-3 border rounded-full cursor-pointer transition-all ${formData.usageType === 'both' ? 'border-[#4CAF50] bg-green-50' : 'border-gray-300 hover:bg-gray-50'}`}>
            <div className="relative flex items-center justify-center w-6 h-6 mr-3">
              <input 
                type="radio" 
                name="usageType" 
                value="both"
                checked={formData.usageType === 'both'}
                onChange={handleRadioChange}
                className="opacity-0 absolute w-full h-full cursor-pointer z-10"
              />
              <div className={`w-5 h-5 border rounded-full transition-colors ${formData.usageType === 'both' ? 'border-[#4CAF50]' : 'border-gray-300'}`}>
                {formData.usageType === 'both' && (
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full m-[3px]"></div>
                )}
              </div>
            </div>
            <span className="text-lg">Both</span>
          </label>
        </div>
      </div>
    );
  };

  const renderReviewStep = () => {
    // Helper function to get display values for options
    const getDisplayValue = (field: string) => {
      switch(field) {
        // EV Type
        case 'tesla': return 'Tesla';
        case 'nissan-leaf': return 'Nissan Leaf';
        case 'bmw-i': return 'BMW i Series';
        case 'audi-etron': return 'Audi e-tron';
        
        // Existing Charger
        case 'level1': return 'Level 1 (standard outlet)';
        case 'level2': return 'Level 2 (240V home charger)';
        case 'dcFast': return 'DC Fast Charger';
        case 'none': return 'No charger installed';
        
        // Charging Method
        case 'home-outlet': return 'Standard wall outlet at home';
        case 'public': return 'Public charging stations';
        case 'workplace': return 'Workplace charging';
        case 'no-home': return 'Not charging at home yet';
        
        // Install Location
        case 'garage': return 'Inside a garage';
        case 'driveway': return 'Driveway/outdoor parking';
        case 'apartment': return 'Apartment/condo building';
        case 'business': return 'Business/commercial property';
        
        // Main Goal
        case 'faster-charging': return 'Faster charging at home';
        case 'convenience': return 'Adding convenience for daily use';
        case 'new-ev': return 'Preparing for a new EV purchase';
        case 'business': return 'Supporting employees/customers at a business';
        
        // Electrical Panel
        case '100-amps': return '100 amps';
        case '200-amps': return '200 amps';
        case 'not-sure': return 'Not sure / needs help checking';
        
        // Charger Guidance
        case 'yes': return 'Yes';
        case 'no': return 'No';
        
        // Smart Features
        case 'yes': return 'Yes (Wi-Fi/app control, usage tracking)';
        case 'no': return 'No, just standard charging';
        case 'not-sure': return 'Not sure yet';
        
        // Timeline
        case '2-weeks': return 'Within the next 2 weeks';
        case '1-2-months': return 'In the next 1-2 months';
        case 'researching': return 'Just researching for now';
        
        // Usage Type
        case 'personal': return 'Personal (home/residential)';
        case 'business': return 'Business (office, fleet, customer use)';
        case 'both': return 'Both';
        
        default: return field;
      }
    };
    
    return (
      <div className="w-full">
        <h2 className="text-[20px] md:text-[28px] lg:text-[32px] font-bold mb-3 md:mb-4 text-gray-800 text-center">Review Your Information</h2>
        {/* <p className="mb-6 text-center">Please review your information before submitting.</p> */}
        
        <div className="bg-gray-50 p-4 md:p-8 rounded-md mb-4 md:mb-6 text-left text-sm md:text-base">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">Your Details</h3>
            <span className="text-sm text-gray-500 italic">Click on any field name to edit</span>
          </div>
          <div className="space-y-2 text-base">
            <p>
              <span onClick={() => setCurrentStep('contact')} className="font-medium cursor-pointer text-blue-600 hover:underline">Name:</span> {formData.name}
            </p>
            <p>
              <span onClick={() => setCurrentStep('ev-type')} className="font-medium cursor-pointer text-blue-600 hover:underline">EV Type:</span> {formData.evType === 'other' ? formData.otherEvType : getDisplayValue(formData.evType)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('existing-charger')} className="font-medium cursor-pointer text-blue-600 hover:underline">Existing Charger:</span> {getDisplayValue(formData.existingCharger)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('charging-method')} className="font-medium cursor-pointer text-blue-600 hover:underline">Charging Method:</span> {getDisplayValue(formData.chargingMethod)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('install-location')} className="font-medium cursor-pointer text-blue-600 hover:underline">Installation Location:</span> {getDisplayValue(formData.installLocation)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('main-goal')} className="font-medium cursor-pointer text-blue-600 hover:underline">Main Goal:</span> {getDisplayValue(formData.mainGoal)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('electrical-panel')} className="font-medium cursor-pointer text-blue-600 hover:underline">Electrical Panel:</span> {getDisplayValue(formData.electricalPanel)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('charger-guidance')} className="font-medium cursor-pointer text-blue-600 hover:underline">Need Charger Guidance:</span> {getDisplayValue(formData.chargerGuidance)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('smart-features')} className="font-medium cursor-pointer text-blue-600 hover:underline">Smart Features Desired:</span> {getDisplayValue(formData.smartFeatures)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('timeline')} className="font-medium cursor-pointer text-blue-600 hover:underline">Installation Timeline:</span> {getDisplayValue(formData.timeline)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('usage-type')} className="font-medium cursor-pointer text-blue-600 hover:underline">Usage Type:</span> {getDisplayValue(formData.usageType)}
            </p>
            <p>
              <span onClick={() => setCurrentStep('location')} className="font-medium cursor-pointer text-blue-600 hover:underline">Location:</span> {formData.location}
            </p>
            <p>
              <span onClick={() => setCurrentStep('contact')} className="font-medium cursor-pointer text-blue-600 hover:underline">Email:</span> {formData.email}
            </p>
            <p>
              <span onClick={() => setCurrentStep('contact')} className="font-medium cursor-pointer text-blue-600 hover:underline">Phone:</span> {formData.phone}
            </p>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 flex justify-between gap-2 md:gap-4">
          <button
            type="button"
            onClick={prevStep}
            className="bg-[#2e3647] hover:bg-gray-700 text-white font-medium py-2 md:py-3 px-6 md:px-16 rounded-full text-sm md:text-base w-1/2 md:w-auto"
          >
            Previous
          </button>
          
          <button
            type="submit"
            className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-2 md:py-3 px-6 md:px-16 rounded-full text-sm md:text-base w-1/2 md:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  const renderConfirmationStep = () => {
    return (
      <div className="w-full text-center px-2 md:px-0">
        <div className="bg-[#4CAF50] rounded-full h-16 w-16 md:h-20 md:w-20 flex items-center justify-center mx-auto mb-3 md:mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">Thank You!</h2>
        <p className="text-sm md:text-base mb-4 md:mb-6">Your EV charging consultation request has been confirmed! Our team of specialists will review your needs and prepare a personalized charging solution.</p>
        <p className="text-sm md:text-base mb-6 md:mb-8">We'll be contacting you within the next 24-48 hours to discuss your options!</p>
        
        <button
          type="button"
          onClick={() => window.location.href = '/'}
          className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-2 md:py-3 px-8 md:px-16 rounded-full text-sm md:text-base"
        >
          Go to Home
        </button>
      </div>
    );
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-8 max-w-3xl mx-auto">
      {currentStep !== 'confirmation' && renderStepIndicator()}
      
      <form onSubmit={handleSubmit} className="mt-14">
        {currentStep === 'welcome' && renderWelcomeStep()}
        {currentStep === 'ev-type' && renderEvTypeStep()}
        {currentStep === 'existing-charger' && renderExistingChargerStep()}
        {currentStep === 'charging-method' && renderChargingMethodStep()}
        {currentStep === 'install-location' && renderInstallLocationStep()}
        {currentStep === 'main-goal' && renderMainGoalStep()}
        {currentStep === 'electrical-panel' && renderElectricalPanelStep()}
        {currentStep === 'charger-guidance' && renderChargerGuidanceStep()}
        {currentStep === 'smart-features' && renderSmartFeaturesStep()}
        {currentStep === 'timeline' && renderTimelineStep()}
        {currentStep === 'usage-type' && renderUsageTypeStep()}
        {currentStep === 'location' && renderLocationStep()}
        {currentStep === 'contact' && renderContactStep()}
        {currentStep === 'review' && renderReviewStep()}
        {currentStep === 'confirmation' && renderConfirmationStep()}
        
        {currentStep !== 'welcome' && currentStep !== 'review' && currentStep !== 'confirmation' && (
          <div className="mt-8 md:mt-12 flex justify-between gap-2 md:gap-4">
            <button
              type="button"
              onClick={prevStep}
              className="bg-[#2e3647] hover:bg-gray-700 text-white font-medium py-2 md:py-3 px-6 md:px-16 rounded-full text-sm md:text-base w-1/2 md:w-auto"
            >
              Previous
            </button>
            
            <button
              type="button"
              onClick={nextStep}
              className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-2 md:py-3 px-6 md:px-16 rounded-full text-sm md:text-base w-1/2 md:w-auto"
            >
              Next →
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
