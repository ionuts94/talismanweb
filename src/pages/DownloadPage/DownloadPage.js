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
                        <a className="mega-download" href="https://mega.nz/file/QIIjiaCa#DEuDlCDablS4EDBdr-5YYcsIOxhlPfp-o0RjUrMyeis" target="_blank"></a>
                    </div>

                    <div className="download-item">
                        <h1>Download from Mediafire</h1>
                        <a className="mediafire-download" href="https://www.mediafire.com/file/1gngnro933k4xvl/The+Classic+Talisman+v2.0.rar/file" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadPage
