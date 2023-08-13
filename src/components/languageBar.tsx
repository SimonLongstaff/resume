import {Component} from "react";

class LanguageBar extends Component<{ language: string, percent: number, level: string }> {
    render() {
        let {language, percent, level} = this.props;
        return (
            <div className="pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            {language}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-300">
                            {level}
                        </span>
                    </div>
                </div>

                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{width: percent + '%'}}
                         className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"/>
                </div>
            </div>
        );
    }
}

export default LanguageBar;
