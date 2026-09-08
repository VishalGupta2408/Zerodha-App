import React from 'react';

function Stats() {
    return (
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-4'>Trust with confidence</h1>
                    
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>
                        That's why 2+ million customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to a daily trading volume.
                    </p>
                    
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>
                    
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services.
                    </p>
                    
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{ width: '100%' }} />
                    <div className='text-center mt-4'>
                        <a href='' className='mx-5' style={{ textDecoration: 'none' }}>Explore our products &rarr;</a>
                        <a href='' style={{ textDecoration: 'none' }}>Try Kite demo &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;