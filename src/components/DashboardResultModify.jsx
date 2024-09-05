import { Link } from "react-router-dom";
export default function DashboardResultModify() {
  const data = [
    { type: "assignment", title: "Title" },
    { type: "assignment", title: "Title" },
    { type: "assignment", title: "Title" },
    { type: "assignment", title: "Title" },
    { type: "assignment", title: "Title" },
    { type: "assignment", title: "Title" },
    { type: "assignment", title: "Title" },
    { type: "assignment", title: "Title" },
  ];
  return (
    <div className="border-radius">
      <div className="flex ">
        <div>
          <label htmlFor="year">gimmick</label>
          <select name="" id=""></select>
        </div>{" "}
        <div>
          <label htmlFor="year">gimmick</label>
          <input type="checkbox" name="" id="" />
        </div>{" "}
        <div>
          <label htmlFor="year">gimmick</label>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div>
        {data.map((el, i) => (
          <div
            key={i}
            className="glass rounded-md my-1 px-3 py-3 flex justify-between"
          >
            <Link className="cursor-pointer text-lg">{`${el.title}-${i}`}</Link>

            <span>Grade 12</span>

            <time dateTime="2008-02-14">2004/01/25</time>
          </div>
        ))}
      </div>
    </div>
  );
}
