import {Component} from "react";


class SkillList extends Component<{ skills: string[] }> {

    render() {
        let {skills} = this.props;
        return (
            <div className="flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                    <span key={index}
                          className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-2 mb-2">
                        {skill}
                    </span>
                ))}
            </div>
        );
    }

}

export default SkillList;