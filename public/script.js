// Public Displays of Malfunction - JavaScript
class WindowsCrashGallery {
    constructor() {
        this.crashes = [];
        this.filteredCrashes = [];
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.currentPage = 1;
        this.itemsPerPage = 12;
        
        this.init();
    }

    init() {
        this.loadCrashInformation();
        this.generateFilterButtons();
        this.bindEvents();
        // this.updateStats(); // Commented out until site grows
        this.renderGallery();
    }

    loadCrashInformation() {
        // Real crash data - using your actual crash images
        console.log('📥 Loading crash data...');
        this.crashes = [
            {
                id: 1,
                title: "Flight Information Display Fail",
                location: "DTW, Detroit, MI",
                description: "Flight information display showing Windows error dialog. Travelers left wondering about their connections. And the future.",
                type: ["Error Dialog", "Airport", "Info Sign"],
                date: "2021-06-15",
                views: 1247,
                image: "images/crashes/Flight Info Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 2,
                title: "In-Flight Entertainment System Fail",
                location: "JAX, Jacksonville, FL",
                description: "Who knew these ran Linux?? Thankfully the in-flight entertainment system was the only crash at 30,000 feet in the air!",
                type: ["BSOD", "Airplane", "TV Screen"],
                date: "2021-06-14",
                views: 892,
                image: "images/crashes/InFlight Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 3,
                title: "Cinemark Lobby Display Fail",
                location: "Cinemark, Los Angeles, CA",
                description: "Movie theater display system crashed during peak hours, showing tasty Windows errors instead of concessions and trailers.",
                type: ["Error Dialog", "Lobby", "Info Sign"],
                date: "2023-06-13",
                views: 2156,
                image: "images/crashes/Cinemark Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 4,
                title: "AMC Movie Theater Screen Fail",
                location: "AMC, Arcadia, CA",
                description: "You can't hide from me, Windows! I don't remember, but this was possibly more entertaining than the movie itself?",
                type: ["OS", "Theater", "Movie Screen"],
                date: "2021-06-12",
                views: 1543,
                image: "images/crashes/Movie Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 5,
                title: "Disney Springs Directory Fail",
                location: "Disney Springs, Orlando, FL",
                description: "Disney's digital display system hit the blue screen of death, breaking the magic with a crash messages.",
                type: ["BSOD", "Outdoor", "Directory" ],
                date: "2019-06-11",
                views: 987,
                image: "images/crashes/Disney Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 6,
                title: "Mall Directory Fail",
                location: "Destiny Mall, Syracuse, NY",
                description: "Interactive mall directory kiosk crashed, showing Windows error dialog instead of store maps and directions.",
                type: ["OS", "Mall", "Directory"],
                date: "2021-06-10",
                views: 756,
                image: "images/crashes/Mall Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 7,
                title: "Cash Register POS Fail",
                location: "AMC, Torrance, CA",
                description: "Point-of-sale system crashed during busy shopping period, displaying Windows error instead of processing payments.",
                type: ["BSOD", "Lobby", "POS System"],
                date: "2011-06-09",
                views: 1834,
                image: "images/crashes/Register Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 8,
                title: "Chevron Gas Station Display Fail",
                location: "Chevron, Calabasas, CA",
                description: "Fuel pump ad display while-you-wait. Honestly, the silence was way better than watching those annoying-as-hell ads!",
                type: ["Error Dialog", "Gas Station", "Ad Viewer"],
                date: "2010-06-08",
                views: 3421,
                image: "images/crashes/Chevron Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 9,
                title: "Coca-Cola Vending Machine Fail",
                location: "Coke Machine, Burbank, CA",
                description: "'Smart' display stuck in Windows update mode, showing update crash instead of beverage options. Do they have it in Orange?",
                type: ["Failed Update", "Vending", "Touchscreen"],
                date: "2019-06-07",
                views: 623,
                image: "images/crashes/Coke Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 10,
                title: "Post Office Display Fail",
                location: "Post Office, Saw Grass, FL",
                description: "Self-service postal line displaying a very helpful blank error dialog. Can we just once have a good post office experience?",
                type: ["Error Dialog", "In Store", "Info Sign"],
                date: "2025-06-06",
                views: 1205,
                image: "images/crashes/Post Office Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 11,
                title: "DVD Rental Kiosk Fail",
                location: "Outside CVS, San Pedro, CA",
                description: "Redbox-style DVD rental kiosk showing Windows crash screen instead of movie selections and rental options. Same price.",
                type: ["Error Dialog", "Vending", "Touchscreen"],
                date: "2011-06-05",
                views: 834,
                image: "images/crashes/DVD Rental Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 12,
                title: "Security System Display Fail",
                location: "Security Sys, Los Angeles, CA",
                description: "Building security monitor displaying Windows error messages blocking some surveillance feeds. Now's my chance!",
                type: ["Error Dialog", "Workstation", "Camera Display"],
                date: "2024-06-04",
                views: 1456,
                image: "images/crashes/Security Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 13,
                title: "Syracuse University Update Fail",
                location: "SU, Syracuse, NY",
                description: "Campus information display system waiting for user input! Um, I cannot reach that high and didn't bring a mouse!",
                type: ["Dialog", "Lobby", "Info Sign"],
                date: "2019-06-03",
                views: 967,
                image: "images/crashes/Syracuse Fail.jpeg",
                credit: "OG-Mac-Snob"
            },
            {
                id: 14,
                title: "Apartment Lobby Display Fail",
                location: "Apartment lobby, Portland, OR",
                description: "Residential display showing 'optimizing progress' instead of announcements and a directory. Also, was not '10 minutes'!",
                type: ["BSOD", "Lobby", "Info Sign"],
                date: "2025-06-02",
                views: 234,
                image: "images/crashes/Apartment Fail.jpeg",
                credit: "OG-Mac-Snob"
            }
        ];
        
        this.filteredCrashes = [...this.crashes];
    }

    bindEvents() {
        // Filter buttons will be bound by bindFilterEvents after generation
        
        // Search input
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.applyFilters();
        });

        // Modal events
        const modal = document.getElementById('imageModal');
        const closeBtn = document.getElementById('closeModal');
        
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Modal share and download buttons
        const shareBtn = document.getElementById('shareBtn');
        const downloadBtn = document.getElementById('downloadBtn');
        
        shareBtn.addEventListener('click', () => {
            const crashId = modal.dataset.crashId;
            if (crashId) {
                this.shareImage(parseInt(crashId));
            }
        });

        downloadBtn.addEventListener('click', () => {
            const crashId = modal.dataset.crashId;
            if (crashId) {
                const crash = this.crashes.find(c => c.id === parseInt(crashId));
                if (crash) {
                    this.downloadImage(crash.image, `${crash.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpg`);
                }
            }
        });

        // Submit form
        const submitForm = document.getElementById('submitForm');
        submitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmitForm();
        });

        // Mission section expand/collapse
        const readMoreLink = document.getElementById('readMoreLink');
        const readLessLink = document.getElementById('readLessLink');
        const missionFull = document.getElementById('missionFull');
        const missionPreview = document.querySelector('.mission-preview');

        if (readMoreLink) {
            readMoreLink.addEventListener('click', (e) => {
                e.preventDefault();
                missionFull.style.display = 'block';
                missionPreview.style.display = 'none';
            });
        }

        if (readLessLink) {
            readLessLink.addEventListener('click', (e) => {
                e.preventDefault();
                missionFull.style.display = 'none';
                missionPreview.style.display = 'block';
            });
        }

        // Smooth scroll to submit section when clicking submit link
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('submit-link')) {
                e.preventDefault();
                const submitSection = document.querySelector('.submit-section');
                if (submitSection) {
                    submitSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Submit button in navigation
        const submitNavBtn = document.getElementById('submitBtn');
        if (submitNavBtn) {
            submitNavBtn.addEventListener('click', () => {
                const submitSection = document.querySelector('.submit-section');
                if (submitSection) {
                    submitSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // File upload drag and drop
        const fileUpload = document.querySelector('.file-upload');
        const fileInput = document.getElementById('crashImage');

        fileUpload.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileUpload.style.borderColor = 'var(--primary-color)';
            fileUpload.style.backgroundColor = 'rgba(0, 102, 204, 0.05)';
        });

        fileUpload.addEventListener('dragleave', (e) => {
            e.preventDefault();
            fileUpload.style.borderColor = 'var(--border-color)';
            fileUpload.style.backgroundColor = 'transparent';
        });

        fileUpload.addEventListener('drop', (e) => {
            e.preventDefault();
            fileUpload.style.borderColor = 'var(--border-color)';
            fileUpload.style.backgroundColor = 'transparent';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                
                // Check file size limit (8MB) for dropped files too
                const maxUploadSize = 8 * 1024 * 1024; // 8MB
                if (file.size > maxUploadSize) {
                    alert(`❌ File too large!\n\nDropped file: ${this.formatFileSize(file.size)}\nMaximum allowed: 8MB\n\nPlease choose a smaller image.`);
                    return;
                }
                
                fileInput.files = files;
                
                // Show file info with compression notice if needed
                const autoCompressThreshold = 4 * 1024 * 1024; // 4MB
                let displayText = file.name;
                if (file.size > autoCompressThreshold) {
                    displayText += ` (${this.formatFileSize(file.size)} - will be compressed)`;
                } else {
                    displayText += ` (${this.formatFileSize(file.size)})`;
                }
                
                this.updateFileUploadText(displayText);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                
                // Check file size limit (8MB)
                const maxUploadSize = 8 * 1024 * 1024; // 8MB
                if (file.size > maxUploadSize) {
                    alert(`❌ File too large!\n\nSelected file: ${this.formatFileSize(file.size)}\nMaximum allowed: 8MB\n\nPlease choose a smaller image.`);
                    e.target.value = ''; // Clear the file input
                    this.updateFileUploadText('Choose File');
                    return;
                }
                
                // Show file info with compression notice if needed
                const autoCompressThreshold = 4 * 1024 * 1024; // 4MB
                let displayText = file.name;
                if (file.size > autoCompressThreshold) {
                    displayText += ` (${this.formatFileSize(file.size)} - will be compressed)`;
                } else {
                    displayText += ` (${this.formatFileSize(file.size)})`;
                }
                
                this.updateFileUploadText(displayText);
            }
        });
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

        this.applyFilters();
    }

    applyFilters() {
        this.filteredCrashes = this.crashes.filter(crash => {
            // Filter by type - match exact first tag
            const matchesFilter = this.currentFilter === 'all' || crash.type[0] === this.currentFilter;
            
            // Filter by search term
            const matchesSearch = this.searchTerm === '' ||
                                crash.title.toLowerCase().includes(this.searchTerm) ||
                                crash.location.toLowerCase().includes(this.searchTerm) ||
                                crash.description.toLowerCase().includes(this.searchTerm);
            
            return matchesFilter && matchesSearch;
        });

        this.renderGallery();
    }

    renderGallery() {
        const gallery = document.getElementById('galleryGrid');
        const noResults = document.getElementById('noResults');
        
        if (this.filteredCrashes.length === 0) {
            gallery.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        gallery.innerHTML = this.filteredCrashes.map(crash => `
            <div class="crash-card" data-id="${crash.id}">
                <img src="${this.getImageSource(crash)}" 
                     alt="${crash.title}" 
                     class="crash-image"
                     onerror="this.src='https://via.placeholder.com/400x250/666/ffffff?text=Image+Not+Found'">
                <div class="crash-info">
                    <h3 class="crash-title">${crash.title}</h3>
                    <div class="crash-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${crash.location}
                    </div>
                    <p class="crash-description">${crash.description}</p>
                    <div class="crash-tags">
                        ${crash.type.map((tag, index) => `<span class="tag tag-${index + 1}">${this.formatTag(tag)}</span>`).join('')}
                    </div>
                    <div class="crash-meta">
                        <div class="crash-date">
                            <i class="fas fa-calendar"></i>
                            ${this.formatDate(crash.date)}
                        </div>
                        <div class="crash-views">
                            <i class="fas fa-eye"></i>
                            ${crash.views.toLocaleString()}
                        </div>
                        <div class="crash-credit">
                            <i class="fas fa-camera"></i>
                            Credit: ${crash.credit}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Add click events to cards
        document.querySelectorAll('.crash-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                this.openModal(id);
            });
        });
    }

    openModal(crashId) {
        const crash = this.crashes.find(c => c.id === crashId);
        if (!crash) return;

        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalLocation = document.getElementById('modalLocation');
        const modalDescription = document.getElementById('modalDescription');
        const modalTags = document.getElementById('modalTags');
        const modalYear = document.getElementById('modalYear');
        const modalCredit = document.getElementById('modalCredit');

        modalImage.src = crash.image;
        modalImage.alt = crash.title;
        modalTitle.textContent = crash.title;
        modalLocation.querySelector('span').textContent = crash.location;
        modalDescription.textContent = crash.description;
        modalTags.innerHTML = crash.type.map((tag, index) => 
            `<span class="tag tag-${index + 1}">${this.formatTag(tag)}</span>`
        ).join('');
        modalYear.querySelector('span').textContent = this.formatDate(crash.date);
        modalCredit.querySelector('span').textContent = crash.credit;

        // Store crash ID for share/download buttons
        modal.dataset.crashId = crashId;

        modal.style.display = 'block';

        // Update view count (simulate)
        crash.views++;
        this.renderGallery();
        // this.updateStats(); // Commented out until site grows
    }

    formatTag(tag) {
        const tagNames = {
            'bsod': 'Blue Screen',
            'error': 'Error',
            'update': 'Update',
            'airport': 'Airport',
            'billboard': 'Billboard',
            'kiosk': 'Kiosk',
            'transport': 'Transport',
            'healthcare': 'Healthcare',
            'finance': 'Finance',
            'sports': 'Sports',
            'retail': 'Retail'
        };
        return tagNames[tag] || tag;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.getFullYear().toString();
    }

    /* Stats functionality commented out until site grows
    updateStats() {
        const totalCrashes = this.crashes.length;
        const blueScreens = this.crashes.filter(c => c.type.includes('bsod')).length;
        const publicFails = this.crashes.filter(c => 
            c.type.includes('airport') || 
            c.type.includes('billboard') || 
            c.type.includes('transport')
        ).length;

        // Animate numbers
        this.animateNumber('totalCrashes', totalCrashes);
        this.animateNumber('blueScreens', blueScreens);
        this.animateNumber('publicFails', publicFails);
    }

    animateNumber(elementId, targetNumber) {
        const element = document.getElementById(elementId);
        const startNumber = parseInt(element.textContent) || 0;
        const duration = 1000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * progress);
            element.textContent = currentNumber;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }
    */

    getImageSource(crash) {
        // Return the actual image file path
        return crash.image;
    }

    async handleSubmitForm() {
        const form = document.getElementById('submitForm');
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        console.log('🚀 Form submission started');
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;

        try {
            // Get form data
            const crashData = {
                title: formData.get('crashTitle'),
                location: formData.get('crashLocation'),
                submitterName: formData.get('submitterName'),
                type: formData.get('crashType'),
                description: formData.get('crashDescription'),
                image: formData.get('crashImage'),
                submittedAt: new Date().toISOString()
            };

            console.log('📋 Form data collected:', crashData);

            // Option 1: Send via EmailJS (recommended for simple setup)
            await this.sendViaEmailJS(crashData);
            
            console.log('✅ Email sent successfully');
            
            // Show success message
            this.showSuccessMessage('Thank you for your submission! Your public malfunction will be reviewed soon.');
            
            // Reset form
            form.reset();
            this.updateFileUploadText('Choose file or drag & drop');

        } catch (error) {
            console.error('❌ Submission error details:', error);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
            
            // Show more specific error message
            let errorMessage = 'Sorry, there was an error submitting your malfunction. ';
            if (error.message.includes('EmailJS')) {
                errorMessage += 'Email service issue detected.';
            } else if (error.message.includes('network')) {
                errorMessage += 'Network connection issue.';
            } else {
                errorMessage += `Details: ${error.message}`;
            }
            
            this.showErrorMessage(errorMessage);
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async sendViaEmailJS(crashData) {
        console.log('📧 Starting email submission...');
        console.log('📧 EMAIL_CONFIG available:', !!window.EMAIL_CONFIG);
        // console.log('📧 EMAIL_CONFIG data:', window.EMAIL_CONFIG); // Commented out to protect email privacy
        console.log('📧 EmailJS library available:', !!window.emailjs);
        console.log('📧 EmailJS Send available:', !!window.emailjs?.send);
        console.log('📧 EmailJS types available:', typeof window.emailjs);
        console.log('📧 All EmailJS methods:', window.emailjs ? Object.keys(window.emailjs) : 'N/A');
        
        try {
            // Upload image to Imgur if present
            let imageUrl = null;
            let imageInfo = 'No image attached';
            let processedImageSize = null;
            if (crashData.image && crashData.image.size > 0) {
                console.log('📸 Processing image for Imgur upload...');
                const imgurResult = await this.uploadImageToImgur(crashData.image);
                imageUrl = imgurResult.url;
                processedImageSize = imgurResult.processedSize;
                
                // Show both original and final size if compressed
                if (imgurResult.wasCompressed) {
                    imageInfo = `Image: ${imgurResult.originalName} (${this.formatFileSize(imgurResult.originalSize)} → ${this.formatFileSize(imgurResult.processedSize)}) - Uploaded to Imgur`;
                } else {
                    imageInfo = `Image: ${imgurResult.originalName} (${this.formatFileSize(imgurResult.processedSize)}) - Uploaded to Imgur`;
                }
                console.log('📸 Image uploaded successfully:', imageUrl);
            }
            // Check if we have valid EmailJS configuration
            const hasValidConfig = window.EMAIL_CONFIG && 
                                 window.EMAIL_CONFIG.emailjs && 
                                 window.EMAIL_CONFIG.emailjs.serviceId &&
                                 window.EMAIL_CONFIG.emailjs.serviceId !== 'your_service_id' &&
                                 (window.emailjs || window.emailjs?.send);
            
            console.log('🔍 Config validation details:');
            console.log('  - EMAIL_CONFIG exists:', !!window.EMAIL_CONFIG);
            console.log('  - emailjs object exists:', !!window.EMAIL_CONFIG?.emailjs);
            console.log('  - serviceId exists:', !!window.EMAIL_CONFIG?.emailjs?.serviceId);
            console.log('  - serviceId value:', window.EMAIL_CONFIG?.emailjs?.serviceId);
            console.log('  - serviceId not placeholder:', window.EMAIL_CONFIG?.emailjs?.serviceId !== 'your_service_id');
            console.log('  - EmailJS library available:', !!(window.emailjs || window.emailjs?.send));
            console.log('  - Final hasValidConfig result:', hasValidConfig);
            
            if (hasValidConfig) {
                console.log('📧 Running in PRODUCTION MODE - Sending real email');
                
                try {
                    // Use real EmailJS
                    const EMAIL_SERVICE_ID = window.EMAIL_CONFIG.emailjs.serviceId;
                    const EMAIL_TEMPLATE_ID = window.EMAIL_CONFIG.emailjs.templateId;
                    const EMAIL_PUBLIC_KEY = window.EMAIL_CONFIG.emailjs.publicKey;
                    const RECIPIENT_EMAIL = window.EMAIL_CONFIG.recipientEmail;
                    
                    console.log('📧 EmailJS Config:', {
                        serviceId: EMAIL_SERVICE_ID,
                        templateId: EMAIL_TEMPLATE_ID,
                        publicKey: EMAIL_PUBLIC_KEY,
                        recipient: RECIPIENT_EMAIL ? RECIPIENT_EMAIL.substring(0, 3) + '***@' + RECIPIENT_EMAIL.split('@')[1] : 'Not set'
                    });
                    
                    // Send Imgur URL instead of base64 data
                    const templateParams = {
                        to_email: RECIPIENT_EMAIL,
                        from_name: 'Public Displays of Malfunction',
                        subject: `🚨 New Malfunction Submission: ${crashData.title}`,
                        crash_title: crashData.title,
                        crash_location: crashData.location,
                        crash_type: crashData.type,
                        submitter_name: crashData.submitterName,
                        crash_description: crashData.description,
                        submitted_at: new Date(crashData.submittedAt).toLocaleString(),
                        image_info: imageInfo,
                        image_name: crashData.image?.name || 'No image',
                        image_size: processedImageSize ? this.formatFileSize(processedImageSize) : 'N/A',
                        image_url: imageUrl || 'No image attached'
                    };
                    
                    console.log('📧 Template params:', {
                        ...templateParams,
                        to_email: templateParams.to_email ? templateParams.to_email.substring(0, 3) + '***@' + templateParams.to_email.split('@')[1] : 'Not set',
                        image_url: imageUrl || 'No image attached'
                    });
                    
                    const response = await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams, EMAIL_PUBLIC_KEY);
                    console.log('📧 Email sent successfully:', response);
                    // alert(`📧 REAL EMAIL SENT! ✅\n\nEmail sent to: ${RECIPIENT_EMAIL}\n\nSubmission: "${crashData.title}" from ${crashData.submitterName}\n\nCheck your inbox!`);
                    return response;
                    
                } catch (emailError) {
                    console.error('📧 Production email failed:', emailError);
                    console.error('📧 Error details:', {
                        message: emailError.message,
                        status: emailError.status,
                        text: emailError.text
                    });
                    
                    // Check if it's a size-related error
                    if (emailError.message && emailError.message.toLowerCase().includes('size') || 
                        emailError.status === 413 || 
                        emailError.text && emailError.text.toLowerCase().includes('too large')) {
                        throw new Error('Image attachment is too large for email. Please try a smaller image or contact support.');
                    }
                    
                    console.log('📧 Falling back to test mode due to error');
                    // Continue to test mode below
                }
            }
            
            // Test mode (either no config or production failed)
            console.log('📧 Running in TEST MODE');
            console.log('📧 Form data that would be sent:', {
                title: crashData.title,
                location: crashData.location,
                type: crashData.type,
                submitterName: crashData.submitterName,
                description: crashData.description?.substring(0, 100) + '...',
                hasImage: !!crashData.image,
                imageName: crashData.image?.name
            });
            
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Simulate successful submission
            console.log('📧 Test submission completed successfully');
            
            // Show success popup
            const testRecipientEmail = window.EMAIL_CONFIG?.recipientEmail || 'your-email@example.com';
            // alert(`📧 TEST MODE - Submission Successful!\n\n✅ Email would be sent to: ${testRecipientEmail}\n\n📋 Submission Details:\n• Title: ${crashData.title}\n• Location: ${crashData.location}\n• Type: ${crashData.type}\n• Submitter: ${crashData.submitterName}\n• ${imageInfo}\n\n${imageUrl ? `📸 Image uploaded to Imgur: ${imageUrl}` : ''}\n\nThis is test mode - no actual email was sent.`);
            
            return true; // Success
            
        } catch (error) {
            console.error('📧 Test submission error:', error);
            throw new Error(`Test submission failed: ${error.message}`);
        }
    }

    async uploadImageToImgur(file) {
        try {
            // Check maximum file size limit (8MB)
            const maxUploadSize = 8 * 1024 * 1024; // 8MB
            if (file.size > maxUploadSize) {
                throw new Error(`Image is too large (${this.formatFileSize(file.size)}). Maximum allowed size is 8MB. Please choose a smaller image.`);
            }
            
            console.log(`📤 Processing image for Imgur: ${file.name} (${this.formatFileSize(file.size)})`);
            
            // Auto-downconvert if over 4MB
            let processedFile = file;
            const autoCompressThreshold = 4 * 1024 * 1024; // 4MB
            
            if (file.size > autoCompressThreshold) {
                console.log('📸 Image is over 4MB, auto-compressing...');
                processedFile = await this.resizeImageForEmail(file, 3600); // Target ~3.6MB to be safe
                console.log(`📸 Compressed image: ${this.formatFileSize(processedFile.size)}`);
            }
            
            console.log(`📤 Uploading to Imgur: ${processedFile.size === file.size ? 'original' : 'compressed'} image (${this.formatFileSize(processedFile.size)})`);
            // Convert processed image to base64 for Imgur API
            const base64Data = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    // Remove the data:image/jpeg;base64, prefix for Imgur
                    const base64 = reader.result.split(',')[1];
                    resolve(base64);
                };
                reader.onerror = reject;
                reader.readAsDataURL(processedFile); // Use processed file instead of original
            });
            
            // Imgur API endpoint for anonymous uploads
            const response = await fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                headers: {
                    'Authorization': 'Client-ID 546c25a59c58ad7', // Public Imgur client ID
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image: base64Data,
                    type: 'base64',
                    title: `PDM Submission: ${file.name}`,
                    description: 'Public Displays of Malfunction submission'
                })
            });
            
            if (!response.ok) {
                throw new Error(`Imgur upload failed: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            
            if (data.success) {
                console.log('📤 Image uploaded successfully to Imgur:', data.data.link);
                return {
                    url: data.data.link,
                    deleteHash: data.data.deletehash,
                    id: data.data.id,
                    // Include processed file info for email
                    originalName: file.name,
                    originalSize: file.size,
                    processedSize: processedFile.size,
                    wasCompressed: processedFile.size !== file.size
                };
            } else {
                throw new Error('Imgur upload failed: ' + (data.data?.error || 'Unknown error'));
            }
            
        } catch (error) {
            console.error('📤 Imgur upload error:', error);
            throw new Error(`Failed to upload image: ${error.message}`);
        }
    }

    async sendViaAPI(crashData) {
        // Alternative: Send to your backend API
        const response = await fetch('/api/submit-crash', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('API submission failed');
        }
        
        return response.json();
    }

    showSuccessMessage(message) {
        this.showNotification(message, 'success');
    }

    showErrorMessage(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }

    updateFileUploadText(text) {
        const uploadText = document.querySelector('.file-upload-text span');
        uploadText.textContent = text;
    }
    shareImage(crashId) {
        const crash = this.crashes.find(c => c.id === crashId);
        
        if (!crash) return;
        
        if (navigator.share) {
            navigator.share({
                title: `${crash.title} - Public Displays of Malfunction`,
                text: `Check out this hilarious Windows crash from ${crash.location}: "${crash.description}"`,
                url: window.location.href
            });
        } else {
            // Fallback to copying formatted text
            const shareText = `${crash.title} - ${crash.location}\n"${crash.description}"\n\nSee more at: ${window.location.href}`;
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Crash details copied to clipboard!');
            }).catch(() => {
                // Fallback for older browsers
                alert('Unable to copy to clipboard. Please manually share this crash!');
            });
        }
    }

    downloadImage(imageUrl, filename) {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = filename || 'windows-crash.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    generateFilterButtons() {
        // Get unique first tags (crash types)
        const crashTypes = [...new Set(this.crashes.map(crash => crash.type[0]))];
        
        // Define icons for each crash type
        const typeIcons = {
            'Error Dialog': 'fas fa-exclamation-circle',
            'BSOD': 'fas fa-desktop',
            'OS': 'fas fa-frown',
            'Failed Update': 'fas fa-download',
            'Dialog': 'fas fa-comment-dots'
        };
        
        const filterContainer = document.querySelector('.filter-buttons');
        
        // Clear existing buttons except "All Crashes"
        filterContainer.innerHTML = `
            <button class="filter-btn active" data-filter="all">
                <i class="fas fa-th"></i> All Crashes
            </button>
        `;
        
        // Add buttons for each malfunction type
        crashTypes.forEach(crashType => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.setAttribute('data-filter', crashType); // Use exact tag name as filter
            
            const icon = typeIcons[crashType] || 'fas fa-bug';
            
            // Create natural button labels but keep original tag as filter value
            let buttonLabel = crashType;
            if (crashType === 'Error Dialog') {
                buttonLabel = 'Error Dialogs';
            } else if (crashType === 'BSOD') {
                buttonLabel = 'Black/Blue Screens';
            } else if (crashType === 'OS') {
                buttonLabel = 'OS Crashes';
            } else if (crashType === 'Failed Update') {
                buttonLabel = 'Update Fails';
            } else if (crashType === 'Dialog') {
                buttonLabel = 'Dialogs';
            }
            
            button.innerHTML = `<i class="${icon}"></i> ${buttonLabel}`;
            
            filterContainer.appendChild(button);
        });
        
        // Re-bind events for new buttons
        this.bindFilterEvents();
    }
    
    bindFilterEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.closest('.filter-btn').dataset.filter;
                this.setFilter(filter);
            });
        });
    }

    // Image processing methods for compression before Imgur upload
    async resizeImageForEmail(file, maxSizeKB = 3600) {
        return new Promise((resolve, reject) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = () => {
                // Calculate new dimensions maintaining aspect ratio
                let { width, height } = this.calculateResizedDimensions(
                    img.width, 
                    img.height, 
                    maxSizeKB * 1024
                );
                
                canvas.width = width;
                canvas.height = height;
                
                // Draw resized image
                ctx.drawImage(img, 0, 0, width, height);
                
                // Convert to blob with higher quality
                canvas.toBlob((blob) => {
                    if (blob && blob.size <= maxSizeKB * 1024) {
                        resolve(blob);
                    } else {
                        // If still too large, reduce quality progressively
                        this.compressImageWithQuality(canvas, maxSizeKB * 1024)
                            .then(resolve)
                            .catch(reject);
                    }
                }, 'image/jpeg', 1.0); // Start with 100% quality instead of default 80%
            };
            
            img.onerror = reject;
            img.src = URL.createObjectURL(file);
        });
    }

    calculateResizedDimensions(originalWidth, originalHeight, maxFileSize) {
        // Start with original dimensions
        let width = originalWidth;
        let height = originalHeight;
        
        // Estimate bytes per pixel (rough approximation)
        const estimatedBytesPerPixel = maxFileSize / (originalWidth * originalHeight);
        
        // If we need to reduce size significantly
        if (estimatedBytesPerPixel < 0.5) {
            const scaleFactor = Math.sqrt(maxFileSize / (originalWidth * originalHeight * 3));
            width = Math.floor(originalWidth * scaleFactor);
            height = Math.floor(originalHeight * scaleFactor);
        }
        
        // Ensure minimum dimensions
        const minDimension = 200;
        if (width < minDimension || height < minDimension) {
            const aspectRatio = originalWidth / originalHeight;
            if (aspectRatio > 1) {
                width = minDimension * aspectRatio;
                height = minDimension;
            } else {
                width = minDimension;
                height = minDimension / aspectRatio;
            }
        }
        
        return { width: Math.floor(width), height: Math.floor(height) };
    }

    async compressImageWithQuality(canvas, maxSize) {
        return new Promise((resolve, reject) => {
            let quality = 1.0; // Start with higher quality (100%)
            
            const tryCompress = () => {
                canvas.toBlob((blob) => {
                    if (!blob) {
                        reject(new Error('Failed to compress image'));
                        return;
                    }
                    
                    if (blob.size <= maxSize || quality <= 0.1) {
                        resolve(blob);
                    } else {
                        quality -= 0.1; // Reduce by 10% each iteration
                        tryCompress();
                    }
                }, 'image/jpeg', quality);
            };
            
            tryCompress();
        });
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Debug: Check if EMAIL_CONFIG loaded properly
    console.log('🔧 Page loaded - EMAIL_CONFIG status:', !!window.EMAIL_CONFIG);
    if (window.EMAIL_CONFIG) {
        console.log('✅ EMAIL_CONFIG loaded successfully');
        console.log('📧 Service ID:', window.EMAIL_CONFIG.emailjs?.serviceId);
    console.log('📧 Recipient:', window.EMAIL_CONFIG.recipientEmail ? 
        window.EMAIL_CONFIG.recipientEmail.substring(0, 3) + '***@' + window.EMAIL_CONFIG.recipientEmail.split('@')[1] : 
        'Not configured');
    } else {
        console.error('❌ EMAIL_CONFIG failed to load');
    }
    
    console.log('🎮 Initializing gallery...');
    try {
        const gallery = new WindowsCrashGallery();
        console.log('✅ Gallery initialized successfully');
        console.log('📊 Total crashes loaded:', gallery.crashes.length);
    } catch (error) {
        console.error('❌ Gallery initialization failed:', error);
    }
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.getElementById('loading').style.display = 'none';
    });
});
