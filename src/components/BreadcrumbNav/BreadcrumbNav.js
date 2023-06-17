import React, { useState, useEffect } from 'react';
import './BreadcrumbNav.css';

const Breadcrumb = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;

            // Determine the active section based on scroll position
            const sections = document.querySelectorAll('section');
            let activeSection = '';

            sections.forEach(section => {
                const offsetTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPos >= offsetTop - 200 && scrollPos < offsetTop + sectionHeight - 200) {
                    activeSection = section.getAttribute('id');
                }
            });
            if (activeSection){

                setActiveSection(activeSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const viewportHeight = window.innerHeight;
            const sectionHeight = section.offsetHeight;
            const offsetTop = section.offsetTop;

            const scrollToOffset = Math.max(0, offsetTop - (viewportHeight - sectionHeight) / 2);

            window.scrollTo({
                top: scrollToOffset,
                behavior: 'smooth',
            });
        }
    };

    const breadcrumbItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'experiences', label: 'Experiences' },
        { id: 'projects', label: 'Projects' },
    ];

    const maxDisplayedItems = 4;

    // Find the index of the active section in the breadcrumb items array
    const activeSectionIndex = breadcrumbItems.findIndex(item => item.id === activeSection);

    // Filter the breadcrumb items array based on the active section index and maximum displayed items
    let filteredBreadcrumbItems = [];
    if (activeSectionIndex !== -1) {
        if (activeSectionIndex < maxDisplayedItems) {
            filteredBreadcrumbItems = breadcrumbItems.slice(0, activeSectionIndex + 1);
        } else {
            filteredBreadcrumbItems = breadcrumbItems.slice(activeSectionIndex - maxDisplayedItems + 2, activeSectionIndex + 2);
            filteredBreadcrumbItems.unshift({ id: '...', label: '...' });
        }
    }

    return (
        <div id="breadcrumb">
            <div className="breadContent">
                {activeSection && (
                    <span>
                        {filteredBreadcrumbItems.map((item, index) => (
                            <React.Fragment key={item.id}>
                                {index > 0 && ' > '}
                                {activeSection === item.id ? (
                                    <span>{item.label}</span>
                                ) : (
                                    <a href={`#${item.id}`} onClick={() => scrollToSection(item.id)}>{item.label}</a>
                                )}
                            </React.Fragment>
                        ))}
                    </span>
                )}
            </div>

        </div>
    );
};

export default Breadcrumb;
