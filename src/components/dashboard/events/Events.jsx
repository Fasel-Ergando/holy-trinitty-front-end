import MyDropzone from "../../MyDropzone";
import { Formik, Form, Field } from "formik";

export default function Events() {
  const initialValues = {
    title: "",
    description: "",
    to: "",
  };
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div className="p-3 h-main">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="flex glass rounded-md h-full p-4 justify-between gap-3">
          <fieldset className="w-1/2">
            <div className="my-2">
              <label className="input-label" htmlFor="title" name="title">
                Title
              </label>
              <Field
                className="input w-full"
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="my-2">
              <label className="input-label" htmlFor="description">
                Description
              </label>
              <Field
                className="input w-full"
                type="text"
                id="description"
                name="description"
                as="textarea"
              />
            </div>
            <div className="my-2">
              <label className="input-label" htmlFor="upload-type">
                To
              </label>
              <Field
                type="text"
                id="upload-type"
                className="input w-full"
                name="to"
                as="select"
              >
                <option value="assignment">Assignment</option>
                <option value="work-sheets">Work sheets</option>
                <option value="Handouts">Handouts</option>
                <option value="books">Books</option>
                <option value="notes">Notes</option>
              </Field>
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </fieldset>
          <fieldset className="w-1/2">
            <label className="">Choose image</label>
            <div className="h-[95%]">
              <MyDropzone />
            </div>
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
}
