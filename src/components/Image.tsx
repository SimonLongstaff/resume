import {Component} from "react";

class ImageFull extends Component<{ src: string, alt: string, className: string }> {
    render() {
        return (
            <div>
                <img src={this.props.src} alt={this.props.alt} className={this.props.className}
                     onClick={() => {
                         let fullscreen = document.getElementById(this.props.alt + "-fullscreen");
                         if (fullscreen) {
                             fullscreen.classList.remove("hidden");
                         }
                     }}/>
                <div id={this.props.alt + "-fullscreen"} className={"hidden"}>
                    <div className={"fixed z-50 inset-0 overflow-y-auto"}>
                        <div
                            className={"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"}>
                            <div className={"fixed inset-0 transition-opacity"}>
                                <div className={"absolute inset-0 bg-gray-500 opacity-75"}/>
                            </div>
                            <span className={"hidden sm:inline-block sm:align-middle sm:h-screen"}/>
                            &#8203;
                            <div
                                className={"inline-block w-3/4 align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle "}>
                                <div className={"flex justify-center"}>
                                    <img src={this.props.src} alt={this.props.alt}
                                         className={"max-h-screen"}/>

                                </div>

                                <div
                                    className={"bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"}>
                                    <button type={"button"}
                                            className={"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"}
                                            onClick={() => {
                                                let fullscreen = document.getElementById(this.props.alt + "-fullscreen");
                                                if (fullscreen) {
                                                    fullscreen.classList.add("hidden");
                                                }
                                            }}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageFull;
