import React, { Component } from 'react'

export default class NavNote extends Component {
  render() {
    return (
      
        <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          <div className="card">
            <div className="card-header" role="tab" id="section1">
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href="#section1ContentId1" aria-expanded="true" aria-controls="section1ContentId">
                  Ghi chu ngay 11/4/2019
                </a>
              </h5>
            </div>
            <div id="section1ContentId1" className="collapse in" role="tabpanel" aria-labelledby="section1">
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis dicta beatae nulla deserunt illum rerum optio tenetur repellat ullam, sint et ducimus facilis dolorum nostrum quo animi reprehenderit nemo.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="section2">
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href="#section1ContentId2" aria-expanded="true" aria-controls="section1ContentId">
                  Ghi chu ngay 15/9/2019
                </a>
              </h5>
            </div>
            <div id="section1ContentId2" className="collapse in" role="tabpanel" aria-labelledby="section2">
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis dicta beatae nulla deserunt illum rerum optio tenetur repellat ullam, sint et ducimus facilis dolorum nostrum quo animi reprehenderit nemo.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="section3">
              <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href="#section1ContentId3" aria-expanded="true" aria-controls="section1ContentId">
                  Ghi chu ngay 22/3/2019
                </a>
              </h5>
            </div>
            <div id="section1ContentId3" className="collapse in" role="tabpanel" aria-labelledby="section3">
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis dicta beatae nulla deserunt illum rerum optio tenetur repellat ullam, sint et ducimus facilis dolorum nostrum quo animi reprehenderit nemo.
              </div>
            </div>
          </div>
        </div>  
      </div>
     
    )
  }
}
