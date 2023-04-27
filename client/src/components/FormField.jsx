import { Box, Button, Container, TextField } from "@mui/material";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const initialValues = {
  name: "",
};
const createTask = async (values) => {
  const task = await axios.post("http://localhost:8190/api/v1/tasks", {
    name: values.name,
  });
  return task;
};
const onSubmit = (values, props) => {
  console.log(values);
  createTask(values);

  props.resetForm();
};

const validationSchema = yup.object({
  name: yup.string().required("Required"),
});

function FormField() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      //   validateOnChange={false}
      validateOnBlur={false}
    >
      {(formik) => {
        return (
          <Container
            maxWidth="md"
            sx={{
              mt: "20px",
              mb: "20px",
            }}
          >
            <Form>
              <Field
                label="Add Task here"
                name="name"
                as={TextField}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={<ErrorMessage name="name" />}
              />
              <Box>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={formik.isSubmitting || !formik.isValid}
                >
                  add
                </Button>
              </Box>
            </Form>
          </Container>
        );
      }}
    </Formik>
  );
}

export default FormField;
