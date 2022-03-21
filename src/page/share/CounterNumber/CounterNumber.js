import React from 'react';

const CounterNumber = () => {
    
       
    return (
        <div >
            <section className="bg-dark text-white py-5 ">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <h1 className="pb-3">Number counter animation in pure JavaScript</h1>
                        </div>
                        <div className="col-md-4">
                            <h1>Customers</h1>
                            <span id="count1" className="display-4">400</span>
                        </div>
                        <div className="col-md-4">
                            <h1>Item</h1>
                            <span id="count2" className="display-4">35</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CounterNumber;