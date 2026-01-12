// 간단한 검색 기능
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = '/ait26/search/?q=' + encodeURIComponent(query);
            }
        });
    }
    
    // 목차 자동 생성 (포스트 페이지)
    if (document.querySelector('.post-content')) {
        generateTOC();
    }
});

// 목차 자동 생성 함수
function generateTOC() {
    const content = document.querySelector('.post-content');
    const toc = document.getElementById('toc');
    
    if (!content || !toc) return;
    
    const headings = content.querySelectorAll('h2, h3, h4');
    if (headings.length === 0) {
        toc.parentElement.style.display = 'none';
        return;
    }
    
    const tocList = document.createElement('ul');
    let currentLevel = 2;
    let currentList = tocList;
    
    headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        const id = 'heading-' + index;
        heading.id = id;
        
        if (level > currentLevel) {
            const newList = document.createElement('ul');
            currentList.lastElementChild.appendChild(newList);
            currentList = newList;
            currentLevel = level;
        } else if (level < currentLevel) {
            while (currentLevel > level) {
                currentList = currentList.parentElement;
                currentLevel--;
            }
        }
        
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#' + id;
        link.textContent = heading.textContent;
        link.addEventListener('click', function(e) {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        listItem.appendChild(link);
        currentList.appendChild(listItem);
    });
    
    toc.appendChild(tocList);
}

