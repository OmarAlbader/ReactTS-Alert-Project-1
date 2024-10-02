import Alert from "./components/Alert/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Alert
        type="alert-default"
        icon={<Bell size={20} />}
        title="Something went wrong"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          tempore <a href="/">perferendis</a>, quaerat saepe facere vero dolor
          explicabo reprehenderit totam culpa!
        </p>
      </Alert>
      <Alert
        type="alert-success"
        icon={<CheckCheck size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quibusdam alias qui et repudiandae, ratione itaque consequatur facere pariatur obcaecati."
      />

      <Alert
        type="alert-error"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quibusdam alias qui et repudiandae, ratione itaque consequatur facere pariatur obcaecati."
      />

      <Alert
        type="alert-warning"
        icon={<AlertTriangle size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quibusdam alias qui et repudiandae, ratione itaque consequatur facere pariatur obcaecati."
      />

      <Alert
        type="alert-info"
        icon={<Info size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quibusdam alias qui et repudiandae, ratione itaque consequatur facere pariatur obcaecati."
      />
    </div>
  );
};

export default App;
