import Package from "../models/Package.js";

/**
 * @desc    Create new package (Admin only)
 * @route   POST /api/packages
 */
export const createPackage = async (req, res) => {
  try {
    const pkg = await Package.create(req.body);
    res.status(201).json(pkg);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Get all active packages
 * @route   GET /api/packages
 */
export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find({ isActive: true })
      .populate("services.serviceId", "name price category");
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get single package
 * @route   GET /api/packages/:id
 */
export const getPackageById = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id)
      .populate("services.serviceId", "name price category");

    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.json(pkg);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Update package (Admin only)
 * @route   PUT /api/packages/:id
 */
export const updatePackage = async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPackage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Soft delete package (Admin only)
 * @route   DELETE /api/packages/:id
 */
export const deletePackage = async (req, res) => {
  try {
    await Package.findByIdAndUpdate(req.params.id, { isActive: false });
    res.json({ message: "Package removed successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
