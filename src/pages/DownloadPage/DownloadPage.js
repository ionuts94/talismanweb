import React from 'react';
import './DownloadPage.css';

const DownloadPage = () => {
    return (
        <div className='download-page-container'>
            <div className='fake-nav'></div>
            <div className="download-container">
                <div className="download-table">
                    <div className="download-item">
                        <h1>Download from MEGA</h1>
                        <a className="mega-download" href="https://mega.nz/file/Dj5zAQgD#fi_kpJxjBy4MAzCqno7K7XuWxe26suUvm6jje6weGr4" target="_blank"></a>
                    </div>

                    <div className="download-item">
                        <h1>Download from 4Shared</h1>
                        <a className="mediafire-download" href="https://www.4shared.com/rar/DxxqsfLEea/The_Classic_Talisman_V30.html?" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadPage
