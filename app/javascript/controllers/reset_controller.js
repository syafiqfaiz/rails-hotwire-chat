import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output" ]
  reset() {
    this.outputTarget.value = ""
  }
}
